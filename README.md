# e2e-sort-fixture

Status: scaffold — features below are planned and are not implemented yet.

## Target features

Test fixture repository for end-to-end checks of a managed delivery pipeline: a minimal Node package whose modules are delivered through managed runs.

Target features become usable only after the corresponding slice is implemented and
verified against its seeded issue and milestone acceptance criteria.

## Verification

These commands verify the bootstrap scaffold only; they do not verify the planned features.
They are declared in `.agent-control-plane/project.json`; this list is a copy for
readers, and the manifest is the contract.

- `test` — `npm test`

## Branches

`main` carries release history. `dev` is the integration branch and the default.
Use `feature/*`, `task/*`, `fix/*`, `release/*` and `hotfix/*` for topic branches.
