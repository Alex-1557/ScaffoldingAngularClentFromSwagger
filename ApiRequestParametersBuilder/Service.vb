Imports System.IO

'XXX-service.ts
Module Service

    Dim FS2 As FileStream
    Dim ServiceTxt As String = "*"
    Dim ServiceImportTxt As String
    Dim ServiceDeclarationTxt As String
    Dim PostServiceDefinitionTxt As String
    Dim GetServiceDefinitionTxt As String
    Dim GetServiceGetParms As String = "*"

    'inserting body to XXX-service.ts
    Sub AddServiceBody(Controller As String, Api As String, GetPost As GetPostType)
        Dim Str2 = Replace(Replace(AngularTemplateServiceImport,
                               "!", $"{Api}_{GetPost}"),
                               "~", $"{Controller}")
        ServiceImportTxt = ServiceImportTxt & Str2
        ServiceTxt = AngularTemplateService.Replace("~", Controller)
        If GetPost = GetPostType.Post Then
            Debug.WriteLine($"Service body {Controller}/{Api}/Post")
            Dim Str3 = Replace(Replace(Replace(AngularTemplateServicePost,
                               "@@", $"{Api}"),
                               "!", $"{Api}_{GetPost}"),
                               "~", $"{Controller}") & vbCrLf
            PostServiceDefinitionTxt = PostServiceDefinitionTxt & Str3 & vbCrLf
        Else
            Debug.WriteLine($"Service body {Controller}/{Api}/Get")
            Dim Str4 = Replace(Replace(Replace(AngularTemplateServiceGet,
                               "@@", $"{Api}"),
                               "!", $"{Api}_{GetPost}"),
                               "~", $"{Controller}") & vbCrLf
            If GetServiceGetParms <> "*" Then
                If GetServiceGetParms <> "" Then
                    Str4 = Replace(Str4, "^$", GetServiceGetParms.Replace("*", ""))
                Else
                    Str4 = Replace(Str4, "^$", "")
                End If
                GetServiceGetParms = "*"
            End If
            GetServiceDefinitionTxt = GetServiceDefinitionTxt & Str4 & vbCrLf
        End If
    End Sub

    'end creating XXX-service.ts
    Sub EndService(Controller As String, Api As String)
        Debug.WriteLine($"Service end {Controller}/{Api}")
        ServiceDeclarationTxt = GetServiceDefinitionTxt & PostServiceDefinitionTxt
        ServiceTxt = Replace(Replace(Replace(Replace(ServiceTxt,
                                     "^#", ServiceImportTxt),
                                     "^%", ServiceDeclarationTxt),
                                     "~", Controller),
                                     "^$", "")
        Dim InterfaceBuf2() As Byte = Text.UTF8Encoding.UTF8.GetBytes(ServiceTxt)
        FS2 = IO.File.Open(OutputDir & $"{Controller}-service.ts", FileMode.Create, FileAccess.Write, FileShare.None)
        FS2.Write(InterfaceBuf2, 0, InterfaceBuf2.Length)
        FS2.Close()
        FS2 = Nothing
        ServiceTxt = "*"
        ServiceImportTxt = ""
        ServiceDeclarationTxt = ""
        GetServiceDefinitionTxt = ""
        PostServiceDefinitionTxt = ""
    End Sub

    'inserting parameter to XXX-service.ts
    Sub AddServiceGetPrm(PrmName As String)
        GetServiceGetParms = GetServiceGetParms & Replace(Replace(AngularTemplateServiceGetPrm, "$", $"{PrmName}"), "*", "")
    End Sub

    'finish creating last service file
    Sub ServiceClose(LastController As String)
        ServiceDeclarationTxt = GetServiceDefinitionTxt & PostServiceDefinitionTxt
        ServiceTxt = Replace(Replace(Replace(Replace(ServiceTxt,
                                         "^#", ServiceImportTxt),
                                         "^%", ServiceDeclarationTxt),
                                         "~", LastController),
                                         "^$", "")
        Dim InterfaceBuf2() As Byte = Text.UTF8Encoding.UTF8.GetBytes(ServiceTxt)
        FS2 = IO.File.Open(OutputDir & $"{LastController}-service.ts", FileMode.Create, FileAccess.Write, FileShare.None)
        FS2.Write(InterfaceBuf2, 0, InterfaceBuf2.Length)
        FS2.Close()
    End Sub

End Module
