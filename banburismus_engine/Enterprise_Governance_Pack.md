# **Banburismus Engine — Software Architecture Document (SAD)**

## **1\. Arquitetura Lógica (Mermaid)**

graph TD  
    UI\[Interfaces/API\] \--\> App\[Application Use Cases\]  
    App \--\> Domain\[Domain Layer\]  
    Domain \--\> Infra\[Infrastructure Adapters\]

## **2\. API Documentation (OpenAPI v3)**

### **POST /analyze**

Analisa a sequência de entrada buscando padrões de probabilidade estatística.

* **Request Payload**: {"sequence": "string"}  
* **Response**: {"id": "uuid", "weight": "float", "pattern": "string"}  
* **Errors**: 400 Bad Request, 500 Internal Server Error

## **3\. Developer Guide**

O projeto segue rigorosamente a **Clean Architecture**.

* Nunca importe infrastructure em domain.  
* Use o Container em infrastructure/container.py para injeção de dependência.  
* Toda regra de negócio deve ser testável sem mocks de banco.

## **4\. Admin & DevOps**

* **Deployment**: Utilizar Docker com multi-stage build.  
* **Observabilidade**: O sistema exporta logs estruturados via structlog.  
* **Config**: Variáveis de ambiente gerenciadas via pydantic-settings.

## **5\. Licença**

MIT License — 2026\.