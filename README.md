# Workflow Rules Platform

    Rule graph executor with guarded transitions and audit output.

    ## Why this exists

    This repository is a compact implementation of a production-flavored system component. It focuses on clear domain boundaries, deterministic behavior and readable extension points instead of framework noise.

    ## Highlights

    - Small core with explicit domain types.
    - Deterministic sample data or simulation path.
    - Separation between parsing, business logic and output formatting.
    - No generated artifacts checked in.

    ## Run

    ```bash
    npm install
npm run build
npm start
    ```

    ## Notes

    The code is intentionally local-first so it can be reviewed quickly. The structure leaves room for storage adapters, HTTP handlers, persistence and automated tests without rewriting the core.
