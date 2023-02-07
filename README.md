## Generates custom react file.

### Usage
```Shell
$ cr generate --type [type] --name [name]

$ cr g -t [type] -n [name] 
```

### Component(with Emotion and twin.macro)
```Shell
$ cr generate --type component --name [name]
$ cr g --t component --n [name]
```
- Generated [Name]/[Name].tsx
- Generated [Name]/[Name]Styled.tsx
- Generated [Name]/[Name]Props.tsx
- Generated [Name]/index.ts

examples. 1
```Shell
$ cr gernerate --type component --name button
$ cr g -t component -n button
# Generated `Button/Button.tsx`
# Generated `Button/ButtonStyled.tsx`
# Generated `Button/ButtonProps.tsx`
# Generated `Button/index.ts`
```

examples. 2
```Shell
$ cr gernerate --type component --name select-option
$ cr g -t component -n select-option
# Generated `SelectOption/SelectOption.tsx`
# Generated `SelectOption/SelectOptionStyled.tsx`
# Generated `SelectOption/SelectOptionProps.tsx`
# Generated `SelectOption/index.ts`
```
 
examples. 3
```Shell
$ cr gernerate --type component --name packages/components/button
$ cr g -t component -n packages/components/button
# Generated `packages/components/Button/Button.tsx`
# Generated `packages/components/Button/ButtonStyled.tsx`
# Generated `packages/components/Button/ButtonProps.tsx`
# Generated `packages/components/Button/index.ts`
```

### Store(Global State, with recoil)
```
cr generate --type store --name [name]
cr g --t store --n [name]
```
- Generated [name]/[name]State.tsx OR stores/[name]State.tsx

examples. 1
```Shell
$ cr gernerate --type store --name content
$ cr g -t store -n content
# Generated file on `stores/content.tsx`
```

examples. 2
```Shell
$ cr gernerate --type store --name content-detail
$ cr g -t store -n content-detail
# Generated file on `stores/content-detail.tsx`
```

examples. 3
```Shell
$ cr gernerate --type component --name packages/stores/content
$ cr g -t component -n packages/stores/content
# Generated file on `packages/stores/content.tsx`
```

### Model
```
cr generate --type model --name [name]
cr g --t model --n [name]
```
- Generated [name]/[name].tsx OR models/[name].tsx

examples. 1
```Shell
$ cr gernerate --type model --name content
$ cr g -t model -n content
# Generated `models/content.tsx`
```

examples. 2
```Shell
$ cr gernerate --type model --name content-detail
$ cr g -t model -n content-detail
# Generates file on `models/content-detail.tsx`
```

examples. 3
```Shell
$ cr gernerate --type model --name packages/models/content
$ cr g -t model -n packages/models/content
# Generates file on `packages/models/content.tsx`
```