## Generates custom react file.

### Usage
```
cr generate --type [type] --name [name]

cr g -t [type] -n [name] 
```

### Component
```
cr generate --type component --name [name]
cr g --t component --n [name]
```
- Generates file on [name]/[Name].tsx
- Generates file on [name]/[Name]Styled.tsx
- Generates file on [name]/[Name]Props.tsx
- Generates file on [name]/index.ts

### Store
```
cr generate --type store --name [name]
cr g --t store --n [name]
```
- Generates file on [name]/[name]State.tsx OR stores/[name]State.tsx

### Model
```
cr generate --type model --name [name]
cr g --t model --n [name]
```
- Generates file on [name]/[name].tsx OR models/[name].tsx
