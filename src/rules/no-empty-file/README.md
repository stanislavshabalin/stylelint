# no-empty-file

Disallow empty files.

```css
  ···\n\t
/**     ↑
 *  This whitespace */
```

The following patterns are considered warnings:

```css

```

```css
\t\t
```

```css
\n
```

The following patterns are *not* considered warnings:

```css
.class { }
```

```css
/* Only comments */
```
