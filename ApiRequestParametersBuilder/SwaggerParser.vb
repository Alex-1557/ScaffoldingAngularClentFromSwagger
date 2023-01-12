Imports Newtonsoft.Json.Linq
Module SwaggerParser
    Dim Schemas As JObject
    Sub Parse(SwaggerJson As JToken)
        '
        Dim Paths As JEnumerable(Of JToken) = SwaggerJson.SelectTokens("$..paths").Children
        Dim Components As JObject = SwaggerJson.SelectToken("$..components")
        Schemas = Components.SelectToken("schemas")
        For Each Api As JToken In Paths.AsEnumerable.ToList
            'Api.path = paths['/Aes/NetCrypt']"
            Dim ApiPath() As String = Api.Path.Split("/")
            If ApiPath.Count = 3 Then
                Dim ControllerName = ApiPath(1)
                Dim ApiName = ApiPath(2).Replace("']", "")
                If Api.SelectToken("$..get") IsNot Nothing Then
                    CodeGenetator.OpenForm(GetPostType.Get, ControllerName, ApiName)
                    If Api.SelectToken("$..get").Count = 3 Then
                        ParseGetPostNode("$..get", Api, ControllerName, ApiName)
                    ElseIf Api.SelectToken("$..get").Count = 2 Then
                        '"/DbMasternode/GetMasternodeInfo": {"get": {"tags": ["DbMasternode"],"responses": {"200": {"description": "Success" } } } }
                        Console.WriteLine($"get/{ControllerName}/{ApiName}/NoParameters")
                        CodeGenetator.CreateFieldPrm(GetPostType.Get, ControllerName, ApiName, PrmRequestType.NoParameters)
                    Else
                        Debugger.Break()
                    End If
                    CodeGenetator.CloseForm(GetPostType.Post, ControllerName, ApiName)
                ElseIf Api.SelectToken("$..post") IsNot Nothing Then
                    CodeGenetator.OpenForm(GetPostType.Post, ControllerName, ApiName)
                    If Api.SelectToken("$..post").Count = 3 Then
                        ParseGetPostNode("$..post", Api, ControllerName, ApiName)
                    ElseIf Api.SelectToken("$..get").Count = 2 Then
                        Console.WriteLine($"post/{ControllerName}/{ApiName}/NoParameters")
                        CodeGenetator.CreateFieldPrm(GetPostType.Post, ControllerName, ApiName, PrmRequestType.NoParameters)
                    Else
                        Debugger.Break()
                    End If
                    CodeGenetator.CloseForm(GetPostType.Post, ControllerName, ApiName)
                Else
                    Console.WriteLine("Ups. Another point than Get/Post !")
                    Console.ReadLine()
                End If
            Else
                Console.WriteLine("Ups. ApiPath does not contain 3 nodes !")
                Console.ReadLine()
            End If
        Next

        'finish creating last interface file
        Interfaces.FinishInterface()
        'finish creating last service file
        Service.ServiceClose(PrevController)
        'finist imports for module
        Import.EndImport()
    End Sub

    Function ParseGetPostNode(GetPost As String, Api As JToken, ControllerName As String, ApiName As String)
        Dim Parameters As JToken
        Dim JsonObjectParameters As List(Of JToken)
        Dim ObjectType As String
        Dim DivPrm As String
        Dim RequestBody As JObject
        If Api.SelectToken(GetPost).Count = 3 Then
            Dim GetPostNode As JToken = Api.SelectToken(GetPost)
            Parameters = GetPostNode.SelectToken("$.parameters")
            If Parameters IsNot Nothing Then
                If Parameters.Children.Count > 0 Then
                    ObjectType = "Directly"
                    DivPrm = ParseDirectParameters(GetPost, ControllerName, ApiName, Parameters)
                Else
                    Debugger.Break()
                End If
            Else
                RequestBody = GetPostNode.SelectToken("$.requestBody")
                If RequestBody IsNot Nothing Then
                    If RequestBody.SelectToken("$.content") IsNot Nothing Then
                        JsonObjectParameters = RequestBody.SelectTokens("$..schema").ToList
                        DivPrm = ParseObjectParameters(GetPost, ControllerName, ApiName, JsonObjectParameters)
                    Else
                        Debugger.Break()
                    End If
                Else
                    Debugger.Break()
                End If

            End If
        Else
            Debugger.Break()
        End If
    End Function

    Function ParseDirectParameters(GetPost As String, Controller As String, Api As String, Parameters As JArray) As String
        Dim PrmNum As Integer = 0
        Dim OneNameType As List(Of Tuple(Of String, String))
        For Each OnePrm As JToken In Parameters.AsEnumerable
            Dim OneType As String = "" 'string
            OneNameType = New List(Of Tuple(Of String, String))
            Dim OneRef As String = "" '"#/components/schemas/PassType"
            Dim PrmName As String = OnePrm.SelectToken("$..name").Value(Of String)
            Dim PrmType As JObject = OnePrm.SelectToken("$..schema")
            If PrmType.SelectToken("$.type") IsNot Nothing Then
                OneType = PrmType.SelectToken("$.type").Value(Of String)
            ElseIf Not String.IsNullOrEmpty(PrmType.SelectToken("$.$ref")) Then
                OneRef = PrmType.SelectToken("$.$ref").Value(Of String)
                OneNameType.Add(GetRefParm(OneRef, PrmNum))
            Else
                Console.WriteLine("Ups. Unexpected program type !")
            End If
            PrmNum = PrmNum + 1
            Dim DirPrmNum As Integer
            If OneNameType.Count > 0 Then
                OneNameType.ForEach(Sub(X As Tuple(Of String, String))
                                        DirPrmNum = DirPrmNum + 1
                                        Console.WriteLine($"{GetPost.Replace("$..", "")}/{Controller}/{Api}/Simple/{X.Item1}/{If(X.Item2, "undefined")}/{DirPrmNum}")
                                        CodeGenetator.CreateFieldPrm(IIf(GetPost.Contains("get"), GetPostType.[Get], GetPostType.Post), Controller, Api, PrmRequestType.Object, X.Item1, $"{If(X.Item2, "undefined")}", DirPrmNum)
                                    End Sub)
            End If
            If OneType <> "" Then
                Console.WriteLine($"{GetPost.Replace("$..", "")}/{Controller}/{Api}/Simple/{PrmName}/{OneType}/{PrmNum}")
                CodeGenetator.CreateFieldPrm(IIf(GetPost.Contains("get"), GetPostType.[Get], GetPostType.Post), Controller, Api, PrmRequestType.Simple, PrmName, OneType, PrmNum)
            End If
        Next
    End Function

    Function ParseObjectParameters(GetPost As String, Controller As String, Api As String, Parameters As List(Of JToken)) As String
        Dim PrmNum As Integer = 0
        Dim OneNameType As Tuple(Of String, String)
        Dim NameTypeList As List(Of Tuple(Of String, String))
        For Each OnePrm As JToken In Parameters
            NameTypeList = New List(Of Tuple(Of String, String))
            Dim OneType As String = "" 'string/array
            Dim OneRef As String = "" '"#/components/schemas/PassType"
            If OnePrm.SelectToken("$.$ref") IsNot Nothing Then
                OneRef = OnePrm.SelectToken("$.$ref").Value(Of String)
                If OnePrm.SelectToken("$.$ref").Count = 1 Then
                    OneNameType = GetRefParm(OneRef, PrmNum)
                Else
                    OnePrm.SelectTokens("$.$ref").AsEnumerable.ToList.ForEach(Sub(X As JToken)
                                                                                  NameTypeList.AddRange(GetRefParms(X, PrmNum))
                                                                              End Sub)
                End If
            Else
                If Not String.IsNullOrEmpty(OnePrm.SelectToken("$.type")) Then
                    OneType = OnePrm.SelectToken("$.type").Value(Of String)
                Else
                    Debugger.Break()
                End If
            End If
            PrmNum = PrmNum + 1
            If OneNameType IsNot Nothing Then
                Console.WriteLine($"{GetPost.Replace("$..", "")}/{Controller}/{Api}/Object/{OneNameType.Item1}/{OneNameType.Item2}/{PrmNum}")
                CodeGenetator.CreateFieldPrm(IIf(GetPost.Contains("get"), GetPostType.[Get], GetPostType.Post), Controller, Api, PrmRequestType.Object, OneNameType.Item1, OneNameType.Item2, PrmNum)
            End If
        Next
        Dim ObjPrmNum As Integer
        If NameTypeList.Count > 0 Then
            NameTypeList.ForEach(Sub(X As Tuple(Of String, String))
                                     ObjPrmNum = ObjPrmNum + 1
                                     Console.WriteLine($"{GetPost.Replace("$..", "")}/{Controller}/{Api}/Object/{X.Item1}/{If(X.Item2, "undefined")}/{ObjPrmNum}")
                                     CodeGenetator.CreateFieldPrm(IIf(GetPost.Contains("get"), GetPostType.[Get], GetPostType.Post), Controller, Api, PrmRequestType.Object, X.Item1, $"{If(X.Item2, "undefined")}", ObjPrmNum)
                                 End Sub)
        End If

    End Function

    Function GetRefParm(Path As String, Num As Integer) As Tuple(Of String, String)
        Dim PrmType As String
        Dim ObjName As String
        If Path.Split("/").Count = 4 Then
            ObjName = Path.Split("/")(3)
            Dim Prm As JProperty = Schemas.AsJEnumerable.FirstOrDefault(Function(X As JProperty)
                                                                            Return X.Name = ObjName
                                                                        End Function)
            If Prm IsNot Nothing Then
                If Prm.SelectToken("$..type") IsNot Nothing Then
                    '"PassType":{"enum": [1,2,3,4,5,6],"type": "integer","format": "int32"}
                    PrmType = Prm.SelectToken("$..type")
                Else
                    Console.WriteLine("Ups. PrmType is nothing !")
                    Debugger.Break()
                End If
            Else
                Console.WriteLine("Ups. Ref is nothing !")
                Debugger.Break()
            End If
        Else
            Console.WriteLine("Ups. Wrong schema path !")
            Debugger.Break()
        End If
        Return New Tuple(Of String, String)(ObjName, PrmType)
    End Function

    Function GetRefParms(Path As String, Num As Integer) As List(Of Tuple(Of String, String))
        Dim PrmType As String
        Dim ObjName As String
        Dim Ret1 As New List(Of Tuple(Of String, String))
        If Path.Split("/").Count = 4 Then
            ObjName = Path.Split("/")(3)
            Dim Prm As JProperty = Schemas.AsJEnumerable.FirstOrDefault(Function(X As JProperty)
                                                                            Return X.Name = ObjName
                                                                        End Function)
            If Prm IsNot Nothing Then
                If Prm.SelectTokens("$..properties").Count > 0 Then
                    For Each Props As JToken In Prm.SelectTokens("$..properties").ToList
                        Dim PropObjName As String = Props.Path 'components.schemas.DecryptPass.properties
                        Dim PropPrmNameArr() As String = PropObjName.Split(".")
                        If PropPrmNameArr.Count = 4 Then
                            ObjName = PropPrmNameArr(3)
                            For Each OnePrm As JProperty In Props
                                Dim OnePrmType As String
                                If OnePrm.SelectTokens("$..type").Count > 1 Then
                                    OnePrmType = "array"

                                ElseIf OnePrm.SelectTokens("$..type").Count = 1 Then
                                    OnePrmType = OnePrm.SelectToken("$..type").Value(Of String)
                                Else
                                    OnePrmType = "undefined"
                                End If
                                Dim OnePrmPath As String = OnePrm.Path '"components.schemas.DecryptPass.properties.serverDecryptPass"
                                Dim OnePrmPathArr() As String = OnePrmPath.Split(".")
                                If OnePrmPathArr.Count = 5 Then
                                    Dim OnePrmName As String = OnePrmPathArr(4)
                                    Ret1.Add(New Tuple(Of String, String)(OnePrmName, OnePrmType))
                                Else
                                    Debugger.Break()
                                End If
                            Next
                        Else
                            Debugger.Break()
                        End If
                    Next
                Else
                    Ret1.Add(New Tuple(Of String, String)(ObjName, "object"))
                End If
            Else
                Console.WriteLine("Ups. Ref is nothing !")
                Debugger.Break()
            End If
        Else
            Console.WriteLine("Ups. Wrong schema path !")
            Debugger.Break()
        End If
        Return Ret1
    End Function

End Module