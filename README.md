### U1JS Library
U1JS is a web-browser JavaScript library for display and interacting with web applications using [UINL](https://uinl.github.io) as the UI interaction language.

## Getting Started
Install the deps:
```sh
pnpm i
```

Run the entry file:
```sh
pnpm dev
```

Run the tests:
```sh
pnpm test
```

## Note
- Follow the commit message convention [here](https://www.conventionalcommits.org/en/v1.0.0/).
- Use [pnpm](https://pnpm.io/) for package management.
- There is a pre-commit hook that lints, and runs the tests before committing, so you can't commit if the tests fail or the linter fails.
- Do not commit directly to the main branch. (This will cause confilcts and unwanted headaches)

## Contributing
- There will be tests for each feautre that I will write.
- Each feature/section will be assigned to a contributor.
- The contributor will create a branch for the feature/section.
- The contributer will provide a PR for the feature/section.
- The PR will be reviewed and merged.

## Roadmap

:white_circle: - Working on
:white_check_mark: - Done

| Task      | Assigned      | Status |
| --------- | ------------- | ------ |
| Setup bundler | (@sangit) | :white_check_mark: |
| Setup jest for UI testing | (@sangit) | :white_check_mark: |
| Write tests for the elements(Paragraph,Div,H1) | (@sangit) | :white_check_mark: |
| Implement Div element (for project overview only) | (@sujan) | :white_check_mark: |
| Implement H1 element (for project overview only) | (@dibas) | :white_check_mark: |
| Handle user actions (click,hover,etc) | (@sangit) | :white_circle: |
| Implement custom css | (@sangit) | :white_circle: |
