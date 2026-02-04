# Admin Login Form Components

Componentes React para formulário de login administrativo, seguindo os padrões do design system.

## Arquivos Criados

### Componentes Reutilizáveis

1. **`button.tsx`** - Componente de botão com variantes
2. **`input.tsx`** - Input e InputField com suporte a erros e hints
3. **`password-input.tsx`** - Input de senha com toggle de visibilidade
4. **`card.tsx`** - Compound component para cards

### Componentes de Página

1. **`admin-login-form.tsx`** - Versão standalone (tudo em um arquivo)
2. **`admin-login-form-refactored.tsx`** - Versão usando componentes reutilizáveis

## Uso

### Versão Completa (Refatorada)

```tsx
import { AdminLoginForm } from './admin-login-form-refactored'

export function App() {
  return <AdminLoginForm />
}
```

### Componentes Individuais

#### Button

```tsx
import { Button } from './button'
import { LogIn } from 'lucide-react'

// Variantes
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
<Button variant="link">Link</Button>

// Tamanhos
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="icon"><LogIn /></Button>

// Estados
<Button disabled>Disabled</Button>
```

#### Input & InputField

```tsx
import { Input, InputField } from './input'

// Input simples
<Input placeholder="Enter text" />
<Input variant="filled" size="lg" />
<Input error placeholder="Has error" />

// InputField com label, erro e hint
<InputField
  label="Email"
  required
  error="Invalid email format"
  hint="We'll never share your email"
  inputProps={{
    type: 'email',
    placeholder: 'you@example.com'
  }}
/>

// InputField com children customizado
<InputField label="Password" required>
  <PasswordInput />
</InputField>
```

#### PasswordInput

```tsx
import { PasswordInput } from './password-input'

// Com toggle de visibilidade (padrão)
<PasswordInput placeholder="Enter password" />

// Sem toggle
<PasswordInput showToggle={false} placeholder="Enter password" />
```

#### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## Estrutura de CSS Variables (Tailwind v4)

As cores devem ser definidas no arquivo CSS raiz:

```css
@theme {
  --color-surface: #ffffff;
  --color-surface-raised: #ffffff;
  --color-primary: #3b82f6;
  --color-primary-hover: #2563eb;
  --color-primary-foreground: #ffffff;
  --color-secondary: #f1f5f9;
  --color-secondary-foreground: #0f172a;
  --color-muted: #f8fafc;
  --color-muted-foreground: #64748b;
  --color-destructive: #ef4444;
  --color-destructive-foreground: #ffffff;
  --color-foreground: #0f172a;
  --color-foreground-subtle: #475569;
  --color-border: #e2e8f0;
  --color-input: #e2e8f0;
  --color-ring: #3b82f6;
}

@media (prefers-color-scheme: dark) {
  @theme {
    --color-surface: #0f172a;
    --color-surface-raised: #1e293b;
    --color-primary: #3b82f6;
    --color-primary-hover: #2563eb;
    --color-primary-foreground: #ffffff;
    --color-secondary: #1e293b;
    --color-secondary-foreground: #f1f5f9;
    --color-muted: #334155;
    --color-muted-foreground: #94a3b8;
    --color-destructive: #ef4444;
    --color-destructive-foreground: #ffffff;
    --color-foreground: #f1f5f9;
    --color-foreground-subtle: #cbd5e1;
    --color-border: #334155;
    --color-input: #334155;
    --color-ring: #3b82f6;
  }
}
```

## Checklist de Conformidade

- [x] Arquivos lowercase com hífens
- [x] Named exports (sem default export)
- [x] `ComponentProps<'elemento'>` + `VariantProps`
- [x] Variantes com `tv()`, classes com `twMerge()`
- [x] `data-slot` para identificação
- [x] Estados via `data-[state]:`
- [x] Cores do tema (não hardcoded)
- [x] Focus visible em interativos
- [x] `aria-label` em botões de ícone
- [x] `{...props}` no final

## Dependências

```json
{
  "dependencies": {
    "react": "^19.0.0",
    "tailwind-variants": "^0.2.0",
    "tailwind-merge": "^2.2.0",
    "lucide-react": "^0.344.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "tailwindcss": "^4.0.0"
  }
}
```
