# Top LEVEL







## Use Case
<!--![Diagram Image Link](toplevel_usecase.puml)-->
[Diagram Image Link](toplevel_usecase.puml)




```mermaid
%%{init: {'theme': 'neutral'}}%%
actor User

rectangle "Chrome Extension" as CE {
    (Track Browsing Activity) as CE1
    (Open Chat Interface) as CE2
    (Ask Question / Request Summary) as CE3
    (Display AI Response) as CE4
}

rectangle "Backend API" as BE {
    (Process Query) as BE1
    (Query OpenAI API) as BE2
    (Return Response) as BE3
}

rectangle "OpenAI API" as OA {
    (Generate AI Response) as OA1
}

User --> CE1
User --> CE2
User --> CE3
CE4 --> User

CE3 --> BE1 : Send Query + Context
CE1 --> BE1 : Send Browsing Context
BE1 --> BE2 : Request AI Response
BE2 --> OA1
OA1 --> BE3
BE3 --> CE4 : Return AI Result