import Usuario from "@/core/usuario/model/usuario"
import TerminalUtil from "../util/TerminalUtil"
import RegistrarUsuario from "@/core/usuario/service/registrarUsuario"
import InverterSenhaCripto from "@/adapter/auth/InverterSenhaCripto"
import EspacoSenhaCripto from "@/adapter/auth/EspacoSenhaCripto"
import SenhaCripto from "@/adapter/auth/SenhaCripto"

export default async function registrarUsuario() {
    TerminalUtil.titulo("Registrar Usuário")

    const nome = await TerminalUtil.campoRequerido("Nome: ", "Ana Banana")
    const email = await TerminalUtil.campoRequerido(
        "Email: ",
        "ana.banana@teste.com"
    )
    const senha = await TerminalUtil.campoRequerido("Senha: ", "123456t")

    const usuario: Usuario = { nome, email, senha }

    const provedorCripto = new SenhaCripto()
    // EspacoSenhaCripto()
    // const provedorCripto = new InverterSenhaCripto()

    const casoDeUso = new RegistrarUsuario(provedorCripto)

    await casoDeUso.executar(usuario)

    TerminalUtil.sucesso("Usuário registrado com sucesso!")
    await TerminalUtil.esperaEnter()

    try {
        await casoDeUso.executar(usuario)
    } catch (e: any) {
        TerminalUtil.erro(e.message)
    } finally {
        await TerminalUtil.esperaEnter()
    }
}
