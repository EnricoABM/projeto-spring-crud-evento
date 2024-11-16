## End-Points
Os End-Points da aplicação estão associados a 5 operações:
* [Consultar Todos](#operação-consultar-todos).
* [Consultar por ID](#operação-consultar-por-ID).
* [Cadastrar](#operação-cadastrar).
* [Atualizar](#operação-atualizar).
* [Remover](#operação-deletar).

### Operação: Consultar Todos
[End-Points](#end-points)
* URL: `http://localhost:8080/event/listall`.
* Verbo HTTP: `GET`.
* Parâmetros: `N/A`.
* Corpo da Requisição: `null`.

Cenário de Sucesso:
* Código: `200 OK`.
    * Corpo da Resposta: `JSON`.
        ```json
        [
            {
                "id": 2,
                "titulo": "AnimeXtreme",
                "descricao": "Maior evento de anime do sul do país",
                "data": "2024-12-15",
                "horarioInicio": "10:00:00",
                "horarioTermino": "20:00:00",
                "endereco": "Porto Alegre",
                "qtdIngressos": 1000,
                "precoIngresso": 90.0,
                "organizador": "Centro de Eventos FIERGS"
            },
            {
                "id": 3,
                "titulo": "AnimeXtreme",
                "descricao": "Maior evento de anime do sul do país",
                "data": "2024-12-15",
                "horarioInicio": "10:00:00",
                "horarioTermino": "20:00:00",
                "endereco": "Porto Alegre",
                "qtdIngressos": 1000,
                "precoIngresso": 90.0,
                "organizador": "Centro de Eventos FIERGS"
            }
        ]
        ``` 

<hr>

### Operação: Consultar por ID
[End-Points](#end-points)
* URL: `http://localhost:8080/event/list/{id}`.
* Verbo HTTP: `GET`.
* Parâmetros:
    * `ID`: ID do evento a ser consultado.
* Corpo da Requisição: `null`.

Cenário de Sucesso:
* Código: `200 OK`.
  * Corpo da Resposta: `JSON`.
      ```json
      {
          "id": 2,
          "titulo": "AnimeXtreme",
          "descricao": "Maior evento de anime do sul do país",
          "data": "2024-12-15",
          "horarioInicio": "10:00:00",
          "horarioTermino": "20:00:00",
          "endereco": "Porto Alegre",
          "qtdIngressos": 1000,
          "precoIngresso": 90.0,
          "organizador": "Centro de Eventos FIERGS"
      }
      ```

Cenário de Falha:
* Código: `404 NOT FOUND`.
* Corpo da Resposta: `null`.

<hr>

### Operação: Cadastrar
[End-Points](#end-points)
* URL: `http://localhost:8080/event/add`.
* Verbo HTTP: `POST`.
* Parâmetros: `N/A`.
  * Corpo da Requisição:
      ```json
      {
          "titulo": "AnimeXtreme",
          "descricao": "Maior evento de anime do sul do país",
          "data": "2024-12-15",
          "horarioInicio": "10:00:00",
          "horarioTermino": "20:00:00",
          "endereco": "Porto Alegre",
          "qtdIngressos": 1000,
          "precoIngresso": 90.0,
          "organizador": "Centro de Eventos FIERGS"
      }
      ```

Cenário de Sucesso:
* Código: `201 CREATED`.
* Corpo da Resposta:
  ```json
    {
        "id": 3,
        "titulo": "AnimeXtreme",
        "descricao": "Maior evento de anime do sul do país",
        "data": "2024-12-15",
        "horarioInicio": "10:00:00",
        "horarioTermino": "20:00:00",
        "endereco": "Porto Alegre",
        "qtdIngressos": 1000,
        "precoIngresso": 90.0,
        "organizador": "Centro de Eventos FIERGS"
    }
  ```

<hr>

### Operação: Atualizar
[End-Points](#end-points)
* URL: `http://localhost:8080/event/update`.
* Verbo HTTP: `PUT`.
* Parâmetros: `N/A`.
* Corpo da Requisição: `JSON`.
    ```json
    {
        "id": 2,
        "titulo": "AnimeXtreme",
        "descricao": "Maior evento de anime do sul do país",
        "data": "2024-12-15",
        "horarioInicio": "10:00:00",
        "horarioTermino": "20:00:00",
        "endereco": "Porto Alegre",
        "qtdIngressos": 2000,
        "precoIngresso": 90.0,
        "organizador": "Centro de Eventos FIERGS"
    }
    ```

Cenário de Sucesso:
* Código: `201 CREATED`.
* Corpo da Resposta: `JSON`.
    ```json
    {
        "id": 2,
        "titulo": "AnimeXtreme",
        "descricao": "Maior evento de anime do sul do país",
        "data": "2024-12-15",
        "horarioInicio": "10:00:00",
        "horarioTermino": "20:00:00",
        "endereco": "Porto Alegre",
        "qtdIngressos": 2000,
        "precoIngresso": 90.0,
        "organizador": "Centro de Eventos FIERGS"
    }
    ```
Cenário de Falha:
* Código: `404 NOT FOUND`.
* Corpo da Resposta: `null`.

<hr>

### Operação: Deletar
[End-Points](#end-points)
* URL: `http://localhost:8080/event/delete/{id}`.
* Verbo HTTP: `DELETE`.
* Parâmetros:
    * `ID`: ID do evento a ser deletado.
* Corpo da Requisição: `null`.

Cenário de Sucesso:
* Código: `204 NO CONTENT`.
* Corpo da Resposta: `null`.

Cenário de Falha:
* Código: `404 NOT FOUND`.
* Corpo da Resposta: `null`.

