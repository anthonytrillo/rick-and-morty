# Rick and Morty App
Una aplicación que consume la API de Rick and Morty para mostrar la lista de personajes, permitiendo filtrarlos y marcarlos como favoritos.

## Comenzando 🚀

### Requisitos 📋
- **NodeJS:** v22.12.0

### Estructura del proyecto 📂
Una estructura modula permite organizar el código de manera clara y escalable. Cada módulo encapsula funcionalidades específicas, combinando componentes, estilos, pruebas y lógica relacionada, lo que facilita el mantenimiento y la colaboración en equipo.

```bash
src/
├── components/
│   ├── Header.tsx
│   ├── Header.module.css
│   ├── NotFound.tsx
│   ├── Pagination.tsx
│   ├── Pagination.module.css
│   └── tests/
│       ├── Header.test.tsx
│       └── Pagination.test.tsx
├── hooks/
│   └── useToasts.ts
├── interfaces/
│   ├── character.ts
│   ├── favorite.ts
│   ├── filters.ts
│   └── pagination.ts
├── modules/
│   ├── characters/
│   │   ├── components/
│   │   │   ├── CharacterCard.tsx
│   │   │   ├── CharacterCard.module.css
│   │   │   ├── FilterBar.tsx
│   │   │   └── FilterBar.module.css
│   │   ├── context/
│   │   │   └── FilterContext.tsx
│   │   ├── hooks/
│   │   │   ├── useCharacterDetails.ts
│   │   │   ├── useCharacters.ts
│   │   │   └── useFilters.ts
│   │   ├── pages/
│   │   │   ├── CharacterDetails.tsx
│   │   │   ├── CharacterDetails.module.css
│   │   │   ├── Characters.tsx
│   │   │   └── Characters.module.css
│   │   └── tests/
│   │       ├── CharacterCard.test.tsx
│   │       └── FilterBar.test.tsx
│   └── favorites/
│       ├── components/
│       │   ├── FavoriteButton.tsx
│       │   └── FavoriteButton.module.css
│       ├── context/
│       │   └── FavoritesContext.tsx
│       ├── hooks/
│       │   ├── useFavorite.ts
│       │   └── useLocalStorageFavorites.ts
│       ├── pages/
│       │   ├── Favorites.tsx
│       │   └── Favorites.module.css
│       └── tests/
│           └── FavoriteButton.test.tsx
├── services/
│   └── Characters.service.ts
├── styles/
│   └── main.css
├── tests/
│   └── App.test.tsx
└── utils/
    └── constants.ts
├── App.tsx
├── main.tsx             
```

### Instalación 🛠️

1. Clona el repositorio:
   ```bash
   git clone https://github.com/anthonytrillo/rick-and-morty-challenge.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Corre el proyecto:
   ```bash
   npm run dev
   ```
4. Abre [http://localhost:5173](http://localhost:5173/) en tu navegador para ver la aplicación.
   
### Pruebas unitarias 🧪
Las pruebas se implementan utilizando Jest y React Testing Library.
Pruebas incluidas:

- Verificar que los componentes principales (lista, detalles, favoritos) se renderizan correctamente.
- Comprobar que los personajes se pueden agregar y eliminar de favoritos.
- Simular interacciones como búsqueda y filtrado.

1. Ejecutar las pruebas:
   ```bash
   npm test
   ```

## Licencia 📄
Este proyecto está licenciado bajo la MIT License.
