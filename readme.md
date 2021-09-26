# Implementação de transaction na Clean Architecture

### <strong>Como usar</strong>

```shell
    docker run --name clean-transaction -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
    Copie o arquivo .env.example para .env e popule com seus dados
    yarn install
    yarn migration:run
    yarn start:dev
```

# API

### <strong>Rota criada</strong>

<strong>Como foi um projeto apenas para estudo de transaction na estrutura </br>
da Clean Architecture criei apenas uma rota que recebe dois usuários a serem criados, </br>
o usuário tem um e-mail que é um campo único na tabela. Sem o uso de transaction caso </br>
seja enviado o primeiro usuário com um e-mail que não existe e o segundo já exista na tabela </br>
o primeiro usuário iria ser criado normalmente e para o segundo iria estourar uma exceção. </br>
Nesse caso quero que os usuários sejam criados apenas se ambos tiverem um e-mail não cadastrado. </br>
</strong>

### <strong>Exemplo de request de sucesso</strong>

```shell
    Rota: api/user/create (POST)

    {
        "firstUser": {
            "name": "first-username",
            "email": "first-username@email.com",
            "password": "any-password"
        },
        "secondUser": {
            "name": "second-username",
            "email": "second-username@email.com",
            "password": "any-password"
        }
    }
```

### <strong>Exemplo de request de erro</strong>

```shell
    Rota: api/user/create (POST)

    {
        "firstUser": {
            "name": "first-username",
            "email": "first-username@email.com",
            "password": "any-password"
        },
        "secondUser": {
            "name": "second-username",
            "email": "first-username@email.com",
            "password": "any-password"
        }
    }
```

### <strong>Referência</strong>

Para aplicação da transaction na estrutura me baseei no código liberado pelo Rodrigo Manguinho </br>
aqui no github (@rmanguinho ~ https://github.com/rmanguinho/advanced-node).

### <strong>@matheusinfo</strong>

Caso veja algo que não condiza com os padrões da Clean sinta-se a vontade para abrir um pull </br>
request ou entre em contato comigo :D </br>
