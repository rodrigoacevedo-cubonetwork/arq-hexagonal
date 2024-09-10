import Carro from "./Carro"

export default function corrida(carro: Carro, logger: (str: string) => void) {
    Array.from({ length: 10 }).forEach(() => {
        carro.acelerar()
        logger(`\nVelocidae: ${carro.velocidadeAtual} km/h`)
    })

    Array.from({ length: 10 }).forEach(() => {
        carro.frear()
        logger(`\nVelocidae: ${carro.velocidadeAtual} km/h`)
    })
}
