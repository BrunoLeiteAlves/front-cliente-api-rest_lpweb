<template>
    <div>
        <ShowMessage :msg="msg" v-show="msg"/>

        <!-- <h2 class="title">Cadastro de Clientes</h2> -->
        <div class="box">
            <h2>Editando Cliente </h2>
            <form id="cliente-form" @submit.prevent="editarCliente">

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
                            <input type="submit" class="button is-primary" value="Editar Cliente">
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
    name: "ClienteFormEdit",
    data() {
        return {
        id: null,
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
        async editarCliente() {
                // Verifica se o id do cliente está presente
                if (!this.id) {
                    console.error("ID do cliente não fornecido para editar.");
                    return;
                }

                const data = {
                    id: this.id,
                    nascimento: this.nascimento,
                    cpf: this.cpf,
                    nome: this.nome,
                    endereco: this.endereco,
                    telefone: this.telefone,
                    email: this.email,
                    datacadastro: this.datacadastro,
                };

                const dataJson = JSON.stringify(data);

                try {
                    const req = await fetch(`http://localhost:8080/api/clientes/${this.id}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: dataJson,
                    });
                    console.log("Executado");
                    if (!req.ok) {
                        const errorData = await req.json();
                        console.error("Erro ao editar cliente:", errorData);
                        return;
                    }
                    
                    const res = await req.json();
                    console.log(res);
                    
                    console.log("Executado3");
                    this.msg = "Edição realizada com sucesso!";
                    setTimeout(() => this.msg = "",3000);

                    console.log("Mensagem definida. Indo para /clientes");
                    this.$router.push(`/clientes`);
                } catch (error) {
                    console.error("Erro ao editar cliente:", error);
                }
            },
            async carregarDadosCliente() {
            try {
                const response = await fetch(`http://localhost:8080/api/clientes/${this.id}`);
                const data = await response.json();

                // Preencha os campos do formulário com os dados do cliente
                this.nascimento = data.nascimento;
                this.cpf = data.cpf;
                this.nome = data.nome;
                this.endereco = data.endereco;
                this.telefone = data.telefone;
                this.email = data.email;
                this.datacadastro = data.datacadastro;
            } catch (error) {
                console.error("Erro ao carregar dados do cliente:", error);
            }
            },
        },
        components: {
            ShowMessage
        },
        created() {
            // Obtem o id da rota
            this.id = this.$route.params.id;
            
            this.carregarDadosCliente();
        }
        
    }
</script>

<style scoped>

</style>