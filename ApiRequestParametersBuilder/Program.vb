Imports Newtonsoft.Json
Imports Newtonsoft.Json.Linq

Module Program
    Const SwaggerJsonFileName = "G:\Projects\CryptoChestMax\api-swagger.json"
    Public Const OutputDir = "G:\Projects\CryptoChestMax\AngularFrontend\AngularBackendTst\src\1\"

    Const AngularTemplatePrmFileName = "AngularTemplatePrm.txt"
    Const AngularTemplateFormFileName = "AngularTemplateForm.txt"
    Const AngularTemplateServiceFileName = "AngularTemplateService.txt"
    Const AngularTemplateServiceImportFileName = "AngularTemplateServiceImport.txt"
    Const AngularTemplateServicePostFileName = "AngularTemplateServicePost.txt"
    Const AngularTemplateServiceGetFileName = "AngularTemplateServiceGet.txt"
    Const AngularTemplateServiceGetPrmFileName = "AngularTemplateServiceGetPrm.txt"
    Const AngularTemplateComponentFileName = "AngularTemplateComponent.txt"
    Const AngularTemplateComponentFormControlFileName = "AngularTemplateComponentFormControl.txt"
    Const AngularTemplateComponentValueFileName = "AngularTemplateComponentValue.txt"

    Public AngularTemplatePrm As String
    Public AngularTemplateForm As String
    Public AngularTemplateService As String
    Public AngularTemplateServiceImport As String
    Public AngularTemplateServicePost As String
    Public AngularTemplateServiceGet As String
    Public AngularTemplateServiceGetPrm As String
    Public AngularTemplateComponent As String
    Public AngularTemplateComponentFormControl As String
    Public AngularTemplateComponentValue As String

    Sub Main(args As String())
        Dim SwaggerStr As String
        Dim SwaggerJson As JToken
        Try
            AngularTemplatePrm = IO.File.ReadAllText(AngularTemplatePrmFileName)
            AngularTemplateForm = IO.File.ReadAllText(AngularTemplateFormFileName)
            AngularTemplateService = IO.File.ReadAllText(AngularTemplateServiceFileName)
            AngularTemplateServiceImport = IO.File.ReadAllText(AngularTemplateServiceImportFileName)
            AngularTemplateServicePost = IO.File.ReadAllText(AngularTemplateServicePostFileName)
            AngularTemplateServiceGet = IO.File.ReadAllText(AngularTemplateServiceGetFileName)
            AngularTemplateServiceGetPrm = IO.File.ReadAllText(AngularTemplateServiceGetPrmFileName)
            AngularTemplateComponent = IO.File.ReadAllText(AngularTemplateComponentFileName)
            AngularTemplateComponentFormControl = IO.File.ReadAllText(AngularTemplateComponentFormControlFileName)
            AngularTemplateComponentValue = IO.File.ReadAllText(AngularTemplateComponentValueFileName)
            SwaggerStr = IO.File.ReadAllText(SwaggerJsonFileName)
        Catch ex As Exception
            Throw New Exception("Input file misssing.")
            Stop
        End Try
        Try
            SwaggerJson = JsonConvert.DeserializeObject(SwaggerStr)
        Catch ex As Exception
            Throw New Exception("Wrong Swagger.json.")
            Stop
        End Try
        SwaggerParser.Parse(SwaggerJson)
    End Sub

    Public Function ToSnakeCase(ByVal str As String) As String
        Return String.Concat(If(str, String.Empty).Select(Function(x, i) If(i > 0 AndAlso i < str.Length - 1 AndAlso Char.IsUpper(x) AndAlso Not Char.IsUpper(str(i - 1)), $"-{x}", x.ToString))).ToLower
    End Function
End Module


'@@ - ApiName + Get/Post
'#  - ApiName + Parameter Name
'$  - Parameter Name
'*  - Parameter Type
'~  - Controller name
'|  - Controller name ToLower
'!  - interface Name (ApiName + Get/Post)
'
'^^ - place too insert Parameters block to FormTemplate
'^# - place to insert Import directive to ServiceFile
'^% - place to insert method directive to ServiceFile
'^$ - place to insert one Get parameter to ServiceFile
'^( - place to insert one FormControl paramerer to ComponentFile
'^) - place to insert one Value parameter to ComponentFile

'known bugs:
'(1) last service in last controller absent last insert and last definition in xxx-service.ts
'(2) in component file yyy-xxx.ts sometimes present zzz-Post in qqqq_Submit() instead zzz-Get (without parameters) and in this case "^(" present as raw text in output file
'(3) sometimes in component method zzz-Post without parameters "^(" present as raw text in output file
'both bugs is minor, solved by Angular editor intellisence