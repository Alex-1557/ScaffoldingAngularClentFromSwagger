Imports System.IO

Module Component
    Dim ComponentTxt As String
    Dim ComponentFormControls As String = ""
    Dim ComponentValues As String = ""

    'start creating XXX-YYYY.ts
    Sub StartConponent()
        ComponentTxt = AngularTemplateComponent
    End Sub

    'end creating XXX-YYYY.ts
    Sub EndConponent(Controller As String, Api As String, GetPost As GetPostType)
        If ComponentValues = "" Then
            ComponentTxt = Replace(Replace(Replace(Replace(ComponentTxt,
                             "@@", Api),
                             "~", Controller),
                             "|", Controller.ToLower),
                             "!", $"{Api}_{GetPost}")
        Else
            ComponentTxt = Replace(Replace(Replace(Replace(Replace(Replace(ComponentTxt,
                                         "@@", Api),
                                         "~", Controller),
                                         "|", Controller.ToLower),
                                         "!", $"{Api}_{GetPost}"),
                                         "^(", $"{Left(ComponentFormControls, ComponentFormControls.Length - 1)}"),
                                         "^)", $"{ComponentValues}")
        End If

        Dim InterfaceBuf3() As Byte = Text.UTF8Encoding.UTF8.GetBytes(ComponentTxt)
        Using FS = IO.File.Open(OutputDir & $"{Controller}-{Api}.ts", FileMode.Create, FileAccess.Write, FileShare.None)
            FS.Write(InterfaceBuf3, 0, InterfaceBuf3.Length)
            FS.Close()
        End Using
        ComponentTxt = ""
        ComponentFormControls = ""
        ComponentValues = ""
    End Sub

    'inserting body to XXX-YYY.ts
    Sub AddComponentBody(ApiName As String, PrmName As String)
        ComponentFormControls = ComponentFormControls & Replace(Replace(AngularTemplateComponentFormControl, "@@", $"{ApiName}"), "$", $"{PrmName}") & vbCrLf
        ComponentValues = ComponentValues & Replace(Replace(AngularTemplateComponentValue, "@@", $"{ApiName}"), "$", $"{PrmName}") & vbCrLf
    End Sub
End Module
