# 🧪 Étape 2 — Tests d'intégration avec React Testing Library

## 🎯 Objectif
Apprendre à tester un **comportement utilisateur complet** dans un composant React.  
Simuler la **saisie**, le **clic** et vérifier l’affichage de résultat.

---

## 🔧 Ce qu’on a fait

- Créé un composant React `LoginForm` avec :
  - 2 champs (`email`, `password`)
  - 1 bouton (`Se connecter`)
  - 1 message de confirmation (`Bienvenue, email !`)
- Écrit un test d’intégration **réaliste** avec `@testing-library/react` et `user-event`

---

## 🧠 Concepts appris

| Concept                  | Détail                                                                 |
|--------------------------|------------------------------------------------------------------------|
| 🧪 Test d’intégration     | Test d’un **flux utilisateur complet**, pas juste une unité isolée     |
| 🧰 React Testing Library  | Utilise des sélecteurs **accessibles** (comme un utilisateur le ferait) |
| 🧾 `getByLabelText`       | Récupère un input **via son label** lié par `htmlFor`                  |
| 🧾 `getByRole('button')`  | Accès aux boutons **via leur rôle** (norme ARIA)                      |
| ✍️ `userEvent.type()`     | Simule la saisie clavier                                               |
| ✍️ `userEvent.click()`    | Simule un clic utilisateur                                             |
| ✅ `toBeInTheDocument()`   | Vérifie qu’un élément **est affiché dans le DOM**                     |

---

## 📦 Outils utilisés

- `@testing-library/react`
- `@testing-library/jest-dom`
- `@testing-library/user-event`
- `jest`
- `jsdom` (environnement DOM pour Jest)

---

## 💡 Rappel technique

Pour que `getByLabelText()` fonctionne, l’input doit avoir un `id` relié à un `<label>` avec `htmlFor` :

```jsx
<label htmlFor="email">Email</label>
<input id="email" />
