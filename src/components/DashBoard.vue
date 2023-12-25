<template>
    <div>
        <ShowMessage :msg="msg" v-show="msg" />

        <table class="table is striped is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Data/Nasc</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Endereço</th>
                    <th>Telefone</th>
                    <th class="email">E-mail</th>
                    <th class="cadastro">Data/Cadastro</th>
                    <th>Opções:</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cliente in clientes" :key="cliente.id">
                    <td>{{ cliente.id }}</td>
                    <td>{{ cliente.nascimento }}</td>
                    <td>{{ cliente.nome }}</td>
                    <td>{{ cliente.cpf }}</td>
                    <td>{{ cliente.endereco }}</td>
                    <td>{{ cliente.telefone }}</td>
                    <td>{{ cliente.email }}</td>
                    <td>{{ cliente.datacadastro }}</td>
                    <td>
                        <button class="button is-success mx-2" @click="editarCliente(cliente.id)">
                            Editar
                        </button>
                        <!-- <RouterLink :to="{ path: `/clientesedit/${cliente.id}/` }" class="btn btn-sucess mx-2">
                            Editar
                        </RouterLink> -->
                        <button class="button is-danger" @click="excluirCliente(cliente.id)">Excluir</button>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
    import ShowMessage from './VMensagem.vue';

    export default {
        name: "DashBoard",
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
                clientes: [],
                msg: null //senão nunca vai atualizar
            };
        },

        components: {
            ShowMessage
        },

        methods: {
            async getClientes() {
                try {

                    const req = await fetch("http://localhost:8080/api/clientes");
                    const data = await req.json();
                    this.clientes = data;
                    console.log(this.clientes); //só teste no inspecionar
                } catch (error) {
                    console.error("Não foi possível obter a lista de clientes!");
                }
                
            },

            editarCliente(id) {
                // Navegue para a rota de edição manualmente
                this.$router.push(`/clientesedit/${id}`);
            },

            async excluirCliente(id) {
                try {
                    const req = await fetch(`http://localhost:8080/api/clientes/${id}`, {
                    method: "DELETE"
                    });

                    if (req.ok) {
                    console.log("Excluído com sucesso!");
                    }

                    this.msg = "Cliente removido com sucesso!";
                    setTimeout(() => this.msg = "", 3000);
                    this.getClientes();
                } catch (error) {
                    console.error('Erro ao excluir cliente:', error);
                }
            }
        },

        mounted() {
            this.getClientes();
        }
    }

</script>

<style scoped>

</style>