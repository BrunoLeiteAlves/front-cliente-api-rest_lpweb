<template>
    <div>

        <ShowMessage :msg="msg" v-show="msg"/>

        <!-- <h2 class="title">Cadastro de Clientes</h2> -->
        <div class="box">
            <form id="cliente-form" @submit="createCliente">

                <div class="columns">
                    <div class="field column is-3">
                        <label class="label" for="nascimento">Data/Nascimento:</label>
                        <div class="control">
                            <input class="input is-primary" type="text" id="nascimento"
                            name="nascimento" v-model="nascimento" placeholder="aaaa-mm-aa">
                        </div>
                    </div>
                    <div class="field column">
                        <label class="label" for="nome">Cliente:</label>
                        <div class="control">
                            <input class="input is-primary" type="text" id="nome"
                            name="nome" v-model="nome" placeholder="Nome">
                        </div>
                    </div>                    
                </div>                   
                <!-- fim do class="columns" -->
                <div class="columns">
                    <div class="field column is-3">
                        <label class="label" for="cpf">CPF:</label>
                        <div class="control">
                            <input class="input is-primary" type="text" id="cpf"
                            name="cpf" v-model="cpf" placeholder="000.000.000-00">
                        </div>
                    </div>
                    <div class="field column">
                        <label class="label" for="endereco">Endereço:</label>
                        <div class="control">
                            <input class="input is-primary" type="text" id="endereco"
                            name="endereco" v-model="endereco" placeholder="Endereço">
                        </div>
                    </div>
                </div>
                <!-- fim do class="columns" -->
                <div class="columns">
                    <div class="field column is-3">
                        <label class="label" for="telefone">Telefone:</label>
                        <div class="control">
                            <input class="input is-primary" type="text" id="telefone"
                            name="telefone" v-model="telefone" placeholder="(99)99999-9999">
                        </div>
                    </div>
                    <div class="field column">
                        <label class="label" for="email">E-mail:</label>
                        <div class="control">
                            <input class="input is-primary" type="text" id="email"
                            name="email" v-model="email" placeholder="E-mail">
                        </div>
                    </div>
                </div>
                <!-- fim do class="columns" -->
                <div class="columns">
                    <div class="field column is-3">
                        <label class="label" for="datacadastro">Data/Cadastro:</label>
                        <div class="control">
                            <input class="input is-primary" type="text" id="datacadastro"
                            name="datacadastro" v-model="datacadastro" placeholder="aaaa-mm-aa">
                        </div>
                    </div>
                    <div class="field column" style="margin-top: 32px;">
                        <div class="control">
                            <input type="submit" class="button is-primary" value="Cadastrar Cliente">
                        </div>
                    </div>
                </div>
                <!-- fim do class="columns" -->

            </form>
        </div>
    </div>
</template>

<script>
    import ShowMessage from './VMensagem.vue';

    export default {
        name: "ClienteForm",
        data() {
            return {
                nascimento: null,
                cpf: null,
                nome: null,
                endereco: null,
                telefone: null,
                email: null,
                datacadastro: null,
                msg: null
            }
        },
        methods: {
            async createCliente(e) {
                e.preventDefault();

                const data = {
                    nascimento: this.nascimento,
                    cpf: this.cpf,
                    nome: this.nome,
                    endereco: this.endereco,
                    telefone: this.telefone,
                    email: this.email,
                    datacadastro: this.datacadastro
                }

                const dataJson = JSON.stringify(data);

                const req = await fetch("http://localhost:8080/api/clientes", {
                    method: "POST",
                    headers: { "Content-Type": "application/json"},
                    body: dataJson
                });

                const res = await req.json();
                console.log(res);

                this.msg = "Cadastro realizado com sucesso!";
                setTimeout(() => this.msg = "",3000);

                this.nascimento = "";
                this.cpf = "";
                this.nome = "";
                this.endereco = "";
                this.telefone = "";
                this.email = "";
                this.datacadastro = "";
            }
        },

        components: {
            ShowMessage
        }
    }
</script>

<style scoped>

</style>