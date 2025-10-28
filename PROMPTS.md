Objtivo:
Criar uma API Rest para acompanhamento de cronograma capilar 

Existem três tratamentos principais no cronograma capilar tradicional:
- hidratação, que repõe a água; 
- nutrição (ou umectação), que repõe lipídios; 
- reconstrução, que repõe massa e proteínas 

Tratamentos principais:
- Hidratação: Repõe a água dos fios, garantindo maciez e brilho.
-  Nutrição: Repõe os lipídios (óleos) que ajudam a selar a hidratação e a devolver o brilho e a maciez.
- Reconstrução: Repõe a massa e as proteínas (como queratina e aminoácidos) para fios danificados e quebradiços, combatendo a porosidade. 

Existem três tipos de cronograma: 
O tradicional, para cresimento e para cabelos crespos e caheadas
- O Tradicional: Um cronograma básico que alterna as três etapas para a saúde geral dos cabelos. 
- O cronograma para crescimento Focado em fortalecer a raiz e os fios para estimular o crescimento. 
- Para cabelos cacheados e crespos: Adapta os tratamentos para as necessidades específicas desses tipos de fio, que geralmente precisam de mais nutrição e hidratação. 

Contexto:

 A API possui as seguintes funcionalidades: 
 - Registro do tipo de cabelo 3b,3c,4a,4b,4c,4d, 
 - Registro do cremes usado,
 - Busca de creme disponivel e de como ele desse ser usado,
 - Busca de dados da ultima lavagem com o tratamento feito no cabelo, 
 - Registro de como o cabelo se comportou apos o tratamento
  Para que eu possa usar as funcionalidades,
  - Preciso fazer login como usuario.
  - Para que eu possa consultar o progresso do tratamento do meu cabelo 
  - Progressão é feita através das lavagens semanais realizadas com cada mascara de tratamento usada.

   Regras:

    - Não me pergunte nada, só faça.
    - A documentação da API deve ser feita com Swagger, em forma de arquivo, crie esse arquivo em uma pasta de recursos. O swagger precisa descrever o modelo JSON da resposta de cada endpoint com base na forma que API for implementada. O Swagger também deve contemplar os status code de erro que serão implementados na API. 
    - Adicione um endpoint para renderizar o Swagger.
    - Construa um arquivo README para descrever o projeto
    - Divida a API em camadas: routes, controllers, service e model 
    - Armazene os dados da API em um banco de dados em memória 
    - Utilize a biblioteca express para construir a API Rest 
    - Faça com que a autenticação seja parte do Middleware, utilizando token JWT como modelo de autenticação, e implemente as regras de autenticação seguindo as informações descritas no contexto.
