# Gardenowo

Wizualny planer istniejącego ogrodu. Pierwsza wersja pomaga rozrysować rabatę, dodawać konkretne rośliny, oznaczać ich status i sprawdzać orientacyjny rozrost w czasie.

## Uruchomienie lokalne

```bash
python -m http.server 4173
```

Następnie otwórz `http://localhost:4173`.

## Deploy na Vercel

Repozytorium jest przygotowane jako statyczna aplikacja. W Vercel wybierz repozytorium `wojokoka-max/gardenowo`, pozostaw Build Command pusty, a Output Directory ustaw na `.`.

Projekt zapisuje dane lokalnie w przeglądarce (`localStorage`).
