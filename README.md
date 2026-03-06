# @velu/ui

Velu design system — shared component library for the Velu HR platform.

## Packages

| Export | Contents |
|--------|----------|
| `@velu/ui` | All components, utils, types |
| `@velu/ui/tokens` | Design tokens (colours, spacing, fonts) |
| `@velu/ui/styles` | Base CSS (nav styles, pills, cards) |

## Setup

### 1. Install

```bash
# From npm (once published)
npm install @velu/ui

# From GitHub (before publishing)
npm install github:your-org/velu-ui
```

### 2. Add the Tailwind preset

In your app's `tailwind.config.ts`:

```ts
import veluPreset from '@velu/ui/tailwind.preset'
import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [{ theme: veluPreset.theme }],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@velu/ui/dist/**/*.{js,mjs}', // scan library classes
  ],
}

export default config
```

### 3. Import styles in your root layout

```ts
import '@velu/ui/styles'
```

### 4. Use components

```tsx
import { Button, Card, Badge, TopNav, PageHeader, DataTable } from '@velu/ui'

// Button
<Button variant="coral">Save Changes</Button>
<Button variant="outline" size="sm">Cancel</Button>

// Badge
<Badge variant="active" dot>Active</Badge>
<Badge variant="pending">Pending</Badge>

// Card
<Card padding="lg">
  <h2>Card title</h2>
</Card>

// StatCard
<StatCard label="Employees" value={148} delta="+4 this month" />

// TopNav — pass onLogout from your auth provider
<TopNav
  userName="Adrian Santos"
  userRole="HR Admin"
  onLogout={async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }}
/>

// PageHeader
<PageHeader title="People" subtitle="148 employees">
  <Button>+ Add Employee</Button>
</PageHeader>

// DataTable
<DataTable
  columns={[
    { key: 'name', header: 'Name' },
    { key: 'role', header: 'Role' },
    { key: 'status', header: 'Status', render: (row) => <Badge variant={row.status}>{row.status}</Badge> },
  ]}
  data={employees}
/>
```

## Using tokens directly

```ts
import { colors, fonts, radius, spacing, moduleColors } from '@velu/ui/tokens'

// Use in inline styles or non-Tailwind contexts
const style = { color: colors.coral.DEFAULT, fontFamily: fonts.display }
```

## Development

```bash
npm install
npm run build        # build to /dist
npm run build:watch  # watch mode
npm run type-check   # TypeScript check
```

## Publishing to npm

```bash
npm run build
npm publish --access public
```

## Using in a monorepo (without publishing)

If Velu app and velu-ui are in the same monorepo:

```
/
  apps/
    velu-app/
  packages/
    velu-ui/
  package.json   ← workspace root
```

Root `package.json`:
```json
{
  "workspaces": ["apps/*", "packages/*"]
}
```

Then in `velu-app/package.json`:
```json
{
  "dependencies": {
    "@velu/ui": "*"
  }
}
```

Run `npm install` from the root and the workspace symlink is created automatically.
