# Quiz de Afinidad Política

Una aplicación de Angular que permite a los usuarios responder un quiz sobre afinidad política y obtener resultados personalizados.

## 🚀 Despliegue en GitHub Pages

El proyecto está configurado para despliegue automático en GitHub Pages mediante GitHub Actions.

### Requisitos Previos
- Node.js 20.x o superior
- npm

### Instalación Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/ChristopherMontiel/quiz-candidatos-2025.git
   cd quiz-candidatos-2025
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar en desarrollo:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:3000`

### Despliegue Automático

El proyecto incluye un workflow de GitHub Actions que automáticamente:
- ✅ Compila el proyecto en configuración de producción
- ✅ Despliega a GitHub Pages al hacer push a la rama `main`

**Acceso a la aplicación desplegada:**
- https://christophermontiel.github.io/quiz-candidatos-2025/

### Despliegue Manual

Si necesitas desplegar manualmente:

```bash
npm run deploy
```

Este comando:
1. Compila la aplicación en producción
2. Despliega los archivos a GitHub Pages

### Scripts Disponibles

- `npm run dev` - Ejecutar servidor de desarrollo
- `npm run build` - Compilar para desarrollo
- `npm run build:prod` - Compilar para producción
- `npm run preview` - Previsualizar compilación en producción
- `npm run deploy` - Desplegar a GitHub Pages

### Estructura del Proyecto

```
src/
├── app.component.ts
├── app.component.html
├── components/
│   ├── quiz/
│   │   ├── quiz.component.ts
│   │   └── quiz.component.html
│   └── results/
│       ├── results.component.ts
│       └── results.component.html
├── models/
│   └── quiz.model.ts
└── services/
    └── quiz.service.ts
```

### Tecnologías Utilizadas

- **Angular 20** - Framework principal
- **TypeScript** - Lenguaje de programación
- **Tailwind CSS** - Estilos
- **RxJS** - Programación reactiva
- **Vite** - Build tool
- **GitHub Actions** - CI/CD

### Configuración de GitHub Pages

La configuración está lista en:
- `angular.json` - Base URL configurada como `/quiz-candidatos-2025/`
- `.github/workflows/deploy.yml` - Workflow de despliegue automático

### Solución de Problemas

**Si el despliegue falla:**

1. Verifica que el repositorio sea público
2. Asegúrate de que GitHub Pages esté habilitado en Settings → Pages
3. Selecciona "Deploy from a branch" y elige `gh-pages` como rama
4. Revisa los logs del workflow en la pestaña "Actions" del repositorio

### Licencia

Este proyecto es de código abierto.
