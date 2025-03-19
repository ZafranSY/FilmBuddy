%%writefile mermaid.md
# Mermaid Diagrams for Recommendation Movie Model

## File Structure Diagram
```mermaid
graph TD
    A[recommendation_model]
    A --> B[app.py]
    A --> C[data.json]
    A --> D[data.py]
    A --> E[data1.py]
    A --> F[loaded_data_debug.json]
    A --> G[main.py]
    A --> H[model.py]
    A --> I[requirements.txt]
    A --> J[data/]
    J --> K[data.json]

