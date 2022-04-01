class contaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação negada!"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, saldo);
        this.tipo = "Corrente";
        this.cartaoCredito = cartaoCredito
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, saldo, numero) {
        super(agencia, numero, tipo, saldo);
        this.tipo = "Poupança"
    }
}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, saldo, numero,) {
        super(agencia, numero, tipo, saldo);
        this.tipo = "Universitária"
    }

    sacar(valor) {
        if(valor > 500) {
            return "Apenas saques abaixo de 500,00 são permitidos para Contas universitárias." 
    }

    this._saldo = this._saldo - valor;
        
    }
}