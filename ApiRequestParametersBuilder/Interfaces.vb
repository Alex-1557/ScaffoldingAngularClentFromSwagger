Imports System.IO
'XXX-input.ts
Module Interfaces
    Dim InterfaceTxt As String = " "
    Dim FS1 As FileStream



    'start create XXX-input.ts
    Sub StartInterface(Api As String, GetPost As GetPostType)
        InterfaceTxt = InterfaceTxt & $"export interface {Api}_{GetPost} {{" & vbCrLf
    End Sub

    'inserting body to XXX-input.ts
    Sub AddIntefaceBody(PrmName As String, PrmType As String)
        InterfaceTxt = InterfaceTxt & $"  {PrmName}:{Replace(PrmType, "integer", "number")};" & vbCrLf
    End Sub

    'end creating XXX-input.ts
    Sub EndInterfaces()
        If InterfaceTxt <> " }" & vbCrLf Then
            Dim InterfaceBuf1() As Byte = Text.UTF8Encoding.UTF8.GetBytes(InterfaceTxt)
            FS1 = IO.File.Open(OutputDir & $"{PrevController}-input.ts", FileMode.Create, FileAccess.Write, FileShare.None)
            FS1.Write(InterfaceBuf1, 0, InterfaceBuf1.Length)
            FS1.Close()
            FS1 = Nothing
            InterfaceTxt = ""
        End If
    End Sub

    'finish creating last interface file
    Sub FinishInterface()
        Dim InterfaceBuf1() As Byte = Text.UTF8Encoding.UTF8.GetBytes(InterfaceTxt & "}" & vbCrLf)
        FS1 = IO.File.Open(OutputDir & $"{PrevController}-input.ts", FileMode.Create, FileAccess.Write, FileShare.None)
        FS1.Write(InterfaceBuf1, 0, InterfaceBuf1.Length)
        FS1.Close()
    End Sub

    Sub CloseLastPoint()
        InterfaceTxt = InterfaceTxt & "}" & vbCrLf
    End Sub

End Module
