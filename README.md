# 🌲 Muminkopedia API – Professional Backend Core (TS Edition)

Witaj w zaawansowanym repozytorium backendu **Muminkopedii**. System budujemy w oparciu o architekturę warstwową, przygotowując grunt pod nowoczesny frontend w React (CSR).

---

## 📝 Zlecenie: Cyfryzacja Doliny – Projekt "Muminkopedia"
> **Od:** Biuro Ewidencji i Archiwizacji Doliny Muminków (Paszczak na stanowisku Dyrektora)  
> **Do:** Zespół Inżynierów Oprogramowania

### 🌲 Kontekst Projektu
Dolina Muminków potrzebuje jednego, rzetelnego źródła prawdy. Obecnie informacje o mieszkańcach są rozproszone: 
* **Mama Muminka** ma notatki w kuchni,
* **Włóczykij** trzyma wszystko w głowie. 

Musimy stworzyć **Muminkopedię** – nowoczesne API, które pozwoli skatalogować każdego mieszkańca oraz każdy magiczny przedmiot (od Harmonijki po Kapelusz Tajemniczego Pana).

### 🎯 Wymagania Funkcjonalne
1.  **Rejestr Postaci:** Każdy wpis musi zawierać: imię, opis, gatunek (np. Muminek, Miukk, Paszczak) oraz **status** (czy postać aktualnie śpi snem zimowym?).
2.  **Katalog Artefaktów:** Każdy artefakt musi mieć swoją nazwę, **opis właściwości** (np. „zmienia rzeczy w chmury”) i być przypisany do konkretnego właściciela.
3.  **Relacje:** Musimy wiedzieć, kto jest najlepszym przyjacielem danej postaci. System musi umieć powiązać jedną postać z drugą.

### ⚙️ Logika Połączeń & Walidacja
* **Dylemat Paszczaka:** Zastanówcie się, jak połączyć artefakty z postaciami. Jeśli postać zostanie usunięta (wyjedzie z Doliny), co dzieje się z jej przedmiotami? 
* **Spójność:** Nie pozwólcie, aby do Muminkopedii trafił wpis bez imienia. Baza danych musi być czysta i spójna.

---

## 🏗️ Architektura Systemu (Layered Architecture)

Stosujemy profesjonalny podział odpowiedzialności (**Separation of Concerns**). Kod jest podzielony na warstwy:

* **Routes**: Definiują punkty wejścia (ścieżki) i delegują zadania do kontrolerów.
* **Controllers**: Obsługują protokół HTTP (odbierają `req`, wysyłają `res`). Nie wiedzą nic o bazie danych!
* **Services**: Serce aplikacji. Tu mieszka **logika biznesowa**.
* **Repositories**: Archiwiści. Jako jedyna warstwa rozmawiają z **Mongoose**.
* **Models**: Architekci. Definiują interfejsy TypeScript oraz schematy Mongoose.

---

## 📅 Metodyka Pracy: Kanban & SDLC

### 📋 Etap 0: Kanban Setup
Zanim otworzycie edytor, przygotujcie tablicę na **GitHub Projects** z kolumnami: `Backlog`, `To Do`, `In Progress` (**WIP Limit: 1**), `Review`, `Done`.

### 📄 Etap 1: Zadanie Inżynierskie (Na dziś!)
Zanim zaczniecie pisać kod w TS, **Wasza para musi opracować dokument `docs/schema.md`**. Musi on zawierać:

1.  **Model Mongoose:** Strukturę dla `Character` oraz `Artifact` wraz z typami danych.
2.  **Plan Relacji:** Czy pole `owner` w Artefakcie powinno być zwykłym tekstem, czy magicznym `ObjectId` prowadzącym do Postaci?
3.  **Lista Endpointów:** Plan tras (np. `POST /api/characters`). 

> **💡 Wskazówka od Paszczaka:** Pamiętajcie, że to API ma być "fundamentem". Za tydzień podłączymy do niego Reacta, więc Wasz JSON musi być czytelny i przewidywalny!

---

## 🛠️ Technologie & Zasady
* **TypeScript** – pełne typowanie interfejsów i funkcji.
* **Clean Code**: 
    * Zawsze używaj `async/await`.
    * Obsługuj błędy – React będzie musiał wiedzieć, dlaczego akcja się nie powiodła.

---

## 🚀 Przykładowe zadania do Backlogu:
- [ ] [DESIGN] Opracowanie dokumentacji w `docs/schema.md`.
- [ ] [INFRA] Konfiguracja TS, połączenie z MongoDB i `.env`.
- [ ] [MODELS] Implementacja interfejsów i modeli Mongoose.
- [ ] [REPO] Stworzenie `CharacterRepository`.
- [ ] [SERVICE] `CharacterService`: Logika biznesowa i walidacja.
- [ ] [API] `CharacterController` i trasy: Implementacja endpointów.
