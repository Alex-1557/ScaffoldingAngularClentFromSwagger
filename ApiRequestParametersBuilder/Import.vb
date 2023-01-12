Imports System.IO

Module Import
    Dim ImportModuleTxt As String
    Dim ModuleDeclarations As String
    Sub AddImport(Controller As String, Api As String)
        ImportModuleTxt = ImportModuleTxt & $"import {{ {Controller}{Api}Component }} from './{ToSnakeCase(Controller)}/{Controller}-{Api}';" & vbCrLf
        ModuleDeclarations = ModuleDeclarations & $"{Controller}{Api}Component,  {New String(" ", 60 - Len(Api) - Len(Controller))}/* {Controller} */" & vbCrLf
    End Sub

    Sub EndImport()
        Dim Buf1() As Byte = Text.UTF8Encoding.UTF8.GetBytes(ImportModuleTxt & ModuleDeclarations)
        Using FS = IO.File.Open(OutputDir & $"components.ts", FileMode.Create, FileAccess.Write, FileShare.None)
            FS.Write(Buf1, 0, Buf1.Length)
            FS.Close()
        End Using
    End Sub

End Module
