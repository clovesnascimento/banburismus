import os
import textwrap
from pathlib import Path

def create_project():
    project_root = Path("banburismus_engine")
    
    files = {
        "pyproject.toml": """
            [project]
            name = "banburismus-engine"
            version = "1.0.0"
            dependencies = ["fastapi", "uvicorn", "pydantic", "structlog", "dependency-injector"]
        """,
        "domain/entities.py": """
            from dataclasses import dataclass
            from typing import List

            @dataclass(frozen=True)
            class Pattern:
                id: str
                sequence: str
                weight: float

            # CNGSM v3.0
        """,
        "application/use_cases/analyze_sequence.py": """
            from domain.entities import Pattern
            
            class AnalyzeSequenceUseCase:
                def execute(self, sequence: str) -> Pattern:
                    # Logic for Banburismus analysis
                    return Pattern(id="1", sequence=sequence, weight=0.95)
        """,
        "main.py": """
            from fastapi import FastAPI
            app = FastAPI(title="Banburismus Engine")
            
            @app.get("/health")
            def health():
                return {"status": "ok"}
        """
    }

    # Bootstrap Filesystem
    for path, content in files.items():
        full_path = project_root / path
        full_path.parent.mkdir(parents=True, exist_ok=True)
        with open(full_path, "w") as f:
            f.write(textwrap.dedent(content).strip())
    
    print(f"Project created at {project_root}")

if __name__ == "__main__":
    create_project()