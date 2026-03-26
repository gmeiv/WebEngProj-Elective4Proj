# Testing Guide

## Overview

This project uses **Vitest** for unit testing and **React Testing Library** for component testing. The pipeline includes automated testing in CI/CD with code coverage reports.

## Setup

Testing dependencies are already installed. The project includes:
- **vitest** - Fast unit testing framework optimized for Vite
- **@testing-library/react** - React component testing utilities
- **@vitest/coverage-v8** - Code coverage reporting
- **happy-dom** - Lightweight DOM implementation for testing

## Running Tests

### Development Mode (Watch)
```bash
npm run test
```
This starts Vitest in watch mode for continuous testing during development.

### Single Run
```bash
npm run test:run
```
Runs tests once and exits. Ideal for CI/CD pipelines.

### With Coverage
```bash
npm run test:coverage
```
Runs tests and generates code coverage reports in the `coverage/` directory.

## Test Structure

Test files should be placed alongside the code they test:
- Component tests: `src/components/ComponentName.test.tsx`
- Utility tests: `src/lib/utilityName.test.ts`
- Page tests: `src/Pages/PageName.test.tsx`

## Writing Tests

### Component Test Example
```typescript
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import MyComponent from "./MyComponent"

describe("MyComponent", () => {
  it("renders with props", () => {
    render(<MyComponent title="Test" />)
    expect(screen.getByText("Test")).toBeInTheDocument()
  })

  it("handles user interactions", () => {
    render(<MyComponent />)
    // Add interaction tests here
  })
})
```

### Utility Function Test Example
```typescript
import { describe, it, expect } from "vitest"
import { myUtility } from "./utils"

describe("myUtility", () => {
  it("should process input correctly", () => {
    const result = myUtility("input")
    expect(result).toBe("expected output")
  })
})
```

## Router Context

Components that use React Router hooks (like `useLocation`) need to be wrapped in a Router for testing:

```typescript
import { BrowserRouter } from "react-router-dom"

const ComponentWithRouter = () => (
  <BrowserRouter>
    <MyComponent />
  </BrowserRouter>
)

render(<ComponentWithRouter />)
```

## CI/CD Integration

The GitHub Actions workflow (`.github/workflows/ci.yml`) includes:
1. **Lint & Type Check** - ESLint and TypeScript validation
2. **Unit Tests** - Vitest execution with coverage
3. **Coverage Reports** - Uploaded as artifacts and commented on PRs
4. **Docker Build & Deploy** - After tests pass

Coverage reports are automatically commented on pull requests for visibility.

## Coverage Reports

Coverage reports are generated in multiple formats:
- **HTML**: `coverage/index.html` - Open in browser for detailed view
- **LCOV**: `coverage/lcov.info` - For CI/CD integrations
- **JSON**: `coverage/coverage-final.json` - For automated analysis

## Debugging Tests

### Run Specific Test Suite
```bash
npm run test:run src/lib/utils.test.ts
```

### Run Specific Test
```bash
npm run test:run -t "should process input correctly"
```

### Debug Mode
Add `debugger;` statements or use Vitest UI:
```bash
npm run test -- --ui
```

## Best Practices

1. **Keep tests focused** - Each test should verify one specific behavior
2. **Use descriptive names** - Test names should explain what is being tested
3. **Follow AAA Pattern** - Arrange, Act, Assert
4. **Mock external dependencies** - Don't test third-party libraries
5. **Test user interactions** - Focus on how users interact with components
6. **Maintain good coverage** - Aim for >80% code coverage

## Troubleshooting

### Tests fail with "Router context" error
Wrap components using React Router hooks with `<BrowserRouter>`

### Coverage reports not generating
Ensure `coverage/` directory exists and check v8 provider is configured in `vitest.config.ts`

### Tests timeout
Increase timeout in specific test:
```typescript
it("slow test", async () => {
  // test code
}, { timeout: 10000 })
```

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-testing-mistakes)
