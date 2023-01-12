Imports System
Imports System.IO
Imports System.Text.Json.Nodes
Imports Newtonsoft.Json
Imports Newtonsoft.Json.Linq

Module CodeGenetator

    Enum GetPostType
        [Get]
        Post
    End Enum

    Enum PrmRequestType
        NoParameters
        [Object]
        Simple
    End Enum

    Public NewApi As Boolean = True
    Public NewController As Boolean = True
    Public PrevApi As String = "*"
    Public PrevController As String = "*"
    Public PrevGetPost As GetPostType

    Sub OpenForm(GetPost As GetPostType, Controller As String, ApiName As String)
        If PrevApi <> ApiName Then
            Debug.WriteLine($"New     API        {ApiName}")
            NewApi = True
            Interfaces.CloseLastPoint()
        Else
            Debug.WriteLine($"Current API        {ApiName}")
            NewApi = False
        End If
        If PrevController <> Controller Then
            Debug.WriteLine($"New     Controller {Controller}")
            NewController = True
        Else
            Debug.WriteLine($"Current Controller {Controller}")
            NewController = False
        End If

        If NewController Then

            'end creating XXX-input.ts
            Interfaces.EndInterfaces()
        End If

        If NewApi And PrevController <> "*" Then

            'inserting body to XXX-service.ts
            Service.AddServiceBody(PrevController, PrevApi, PrevGetPost)
        End If

        If NewController And PrevApi <> "*" Then

            'end creating XXX-service.ts
            Service.EndService(PrevController, PrevApi)
        End If

        PrevApi = ApiName
        PrevController = Controller
        PrevGetPost = GetPost

        If NewApi Then
            'start create XXX-input.ts
            Interfaces.StartInterface(ApiName, GetPost)

            'start creating XXX-YYYY.ts
            Component.StartConponent()
        End If

    End Sub


    Sub CloseForm(GetPost As GetPostType, Controller As String, ApiName As String)

        'end creating XXX-form.html
        Forms.EndForms(ApiName)

        'end creating XXX-YYYY.ts
        Component.EndConponent(PrevController, PrevApi, PrevGetPost)

        Import.AddImport(Controller, ApiName)
    End Sub

    Sub CreateFieldPrm(GetPost As GetPostType, Controlller As String, ApiName As String, PrmRequestType As PrmRequestType, Optional PrmName As String = "", Optional PrmType As String = "", Optional PrmNum As String = "")
        If PrmName <> "" Then

            'inserting body to XXX-input.ts
            Interfaces.AddIntefaceBody(PrmName, PrmType)

            'inserting body to XXX-form.html
            Forms.AddFormBody(Controlller, ApiName, PrmName, PrmType)
        End If

        If GetPost = GetPostType.Get And PrmName <> "" Then

            'inserting parameter to XXX-service.ts
            Service.AddServiceGetPrm(PrmName)
        End If

        If PrmName <> "" Then

            'inserting body to XXX-YYY.ts
            Component.AddComponentBody(ApiName, PrmName)
        End If
    End Sub

End Module







