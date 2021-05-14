# Teste Backend Nodejs

Seu desafio será desenvolver um serviço de denúncias e, como parte dele, veremos como você estrutura as camadas de aplicação, chamadas externas, variáveis de ambiente, cache, testes unitários, logs e documentação.

### Solução

Implementar uma API REST ```[POST] /v1/denuncias``` para inserir novas denúncias.

+ O serviço de denúncias deverá persistir no banco de dados todos os atributos recebidos no request, juntamente com os dados de endereço originários de uma api externa;
+ O serviço de denúncia receberá a geolocalizacão a partir do request e deverá buscar os dados de endereço no seguinte serviço [https://developer.mapquest.com/documentation/geocoding-api/](https://developer.mapquest.com/documentation/geocoding-api/);
+ Para saber como utilizar o referido serviço de geolocalização verifique [https://developer.mapquest.com/documentation/](https://developer.mapquest.com/documentation/) e [https://developer.mapquest.com/documentation/geocoding-api/](https://developer.mapquest.com/documentation/geocoding-api/);
+ A API REST deverá retornar um erro caso o endereço não seja encontrado no serviço de geolocalização;

Considere as informações abaixo para desenvolver o teste.

_Request_

```
curl -X POST \
  http://localhost:3000/v1/denuncias \
  -H 'Content-Type: application/json' \
  -d '{
  "latitude": -9.56921,
  "longitude": -36.76422,
  "denunciante": {
    "nome": "José de Oliveira",
    "cpf": "95761638037"
  },
  "denuncia": {
    "titulo": "Esgoto a céu aberto",
    "descricao": "Existe um esgoto a céu aberto nesta localidade."
  }
}'
```

_Response.body_

```
{
  "data": {
    "id": 1,
    "latitude": -9.648198,
    "longitude": -35.713458,
    "denunciante": {
      "nome": "José de Oliveira",
      "cpf": "95761638037"
    },
    "denuncia": {
      "titulo": "Esgoto a céu aberto",
      "descricao": "Existe um esgoto a céu aberto nesta localidade."
    },
    "endereco": {
      "logradouro": "Avenida Dona Constança de Góes Monteiro",
      "bairro": "",
      "cidade": "Maceió",
      "estado": "Alagoas",
      "pais": "BR",
      "cep": "57036-371"
    }
  }
}
```

_Response.body (error)_

```
{
  "error": {
    "message": "Endereço não encontrado para essa localidade.",
    "code": "01"
  }
}
```

### Tipos de Erros sugeridos

Estas são as sugestões de erros mapeados, porém fique livre para adicionar outros, caso identifique erros não mapeados.

| Code | Message                                       |
|------|-----------------------------------------------|
| 01   | Request inválido.                             |
| 02   | Endereço não encontrado para essa localidade. |

### Serviços dependentes

Este é um exemplo do retorno do request à API de geolocação. Estado, cidade e país são dados obrigatórios na composição do endereço. Os demais campos deverão ficar em branco caso não seja retornado dados para os mesmos.

_Response.body_

```
{
  "info": {
    "statuscode": 0,
    "copyright": {
      "text": "© 2020 MapQuest, Inc.",
      "imageUrl": "http://api.mqcdn.com/res/mqlogo.gif",
      "imageAltText": "© 2020 MapQuest, Inc."
    },
    "messages": []
  },
  "options": {
    "maxResults": 1,
    "thumbMaps": false,
    "ignoreLatLngInput": false
  },
  "results": [
    {
      "providedLocation": {
        "latLng": {
          "lat": -9.648198,
          "lng": -35.713458
        }
      },
      "locations": [
        {
          "street": "Avenida Dona Constança de Góes Monteiro",
          "adminArea6": "",
          "adminArea6Type": "Neighborhood",
          "adminArea5": "Maceió",
          "adminArea5Type": "City",
          "adminArea4": "",
          "adminArea4Type": "County",
          "adminArea3": "Alagoas",
          "adminArea3Type": "State",
          "adminArea1": "BR",
          "adminArea1Type": "Country",
          "postalCode": "57036-371",
          "geocodeQualityCode": "B1AAA",
          "geocodeQuality": "STREET",
          "dragPoint": false,
          "sideOfStreet": "N",
          "linkId": "0",
          "unknownInput": "",
          "type": "s",
          "latLng": {
            "lat": -9.648263,
            "lng": -35.713381
          },
          "displayLatLng": {
            "lat": -9.648263,
            "lng": -35.713381
          }
        }
      ]
    }
  ]
}
```

### O que esperamos

+ Que o desafio seja feito em Node.js;
+ Que considere utilizar cache para consultas ao serviço de geolocalização;
+ TDD;
+ Princípios SOLID;
+ [12Factor](https://12factor.net/);
+ Passo-a-passo de como rodar sua aplicação;

### Envio do teste
Ao finalizar, deverá ser enviado o link do repositório e do sistema em produção, no caso de ter feito o deploy, pelo seguinte formulário: https://docs.google.com/forms/d/e/1FAIpQLSd0NyNX0HDmiuRFBbQGE5EyHhHF5abRoj78IDvkqh4VyKLA2A/viewform

### Avaliação
Irá ser avaliado:

+ Seu conhecimento técnico e criatividade;
+ Sua habilidade para resolver problemas de forma simples e eficiente;
+ Boas práticas de código.
---

Boa sorte!

Equipe **#roga_rocks**

<h2 id="instalacao">:closed_book: Instalação </h2>

<h3>Pré-requisitos </h3>

<h4>Dependências: </h4>

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/pt-br/)
- [Mongo](https://www.mongodb.com/)
- [Redis](https://redis.io/)

```bash
# Clone este repositório.
$ git clone github.com/GustavoSantosCS/teste-backend-nodejs

# Vá para a pasta podcastr
$ cd teste-backend-nodejs

# Instale as dependências
$ npm install / yarn install

# Execute build da aplicação
$ npm run build / yarn build

# Gerar o arquivo .env com as suas configurações, use o .exemplo.env como guia

# Execute aplicação
$ npm start / yarn start

# O app vai está rodando na porta 3000 - acesse <http://localhost:3000>
```
