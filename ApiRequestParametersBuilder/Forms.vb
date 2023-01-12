Imports System.IO

'XXX-YYYY-form.html
Module Forms
    Dim FormTxt As String = ""

    'end creating XXX-form.html
    Sub EndForms(ApiName As String)
        Dim Str1 = Replace(Replace(AngularTemplateForm,
                       "@@", $"{ApiName}"),
                       "^^", FormTxt)
        Dim Buf1() As Byte = Text.UTF8Encoding.UTF8.GetBytes(Str1)
        Using FS = IO.File.Open(OutputDir & $"{PrevController}-{PrevApi}-form.html", FileMode.Create, FileAccess.Write, FileShare.None)
            FS.Write(Buf1, 0, Buf1.Length)
            FS.Close()
        End Using
        FormTxt = ""
    End Sub

    'inserting body To XXX-form.html
    Sub AddFormBody(Controlller As String, ApiName As String, PrmName As String, PrmType As String)
        Dim Str1 = Replace(Replace(Replace(Replace(Replace(AngularTemplatePrm,
                       "@@", $"{ApiName}"),
                       "#", $"{ApiName}_{PrmName}"),
                       "$", $"{PrmName}"),
                       "*", $"{PrmType}"),
                       "~", $"{Controlller}") & vbCrLf
        FormTxt = FormTxt + Str1
    End Sub
End Module
