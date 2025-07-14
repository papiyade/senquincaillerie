# 🏦 My Baobab Clone - Application Bancaire Mobile

Clone de l'application mobile My Baobab (Banque/Microfinance Baobab Sénégal) développé avec React Native et Laravel.

## 🏗️ Architecture

```
my-baobab-clone/
├── mobile/          # Application React Native + TypeScript
├── backend/         # API Laravel + MySQL
├── database/        # Scripts et migrations de base de données
└── docs/           # Documentation du projet
```

## 🎨 Design & Couleurs

- **Couleurs principales** : Rose doux (#FF69B4), Blanc (#FFFFFF), Gris clair (#F5F5F5)
- **Interface** : Moderne, professionnelle et intuitive
- **Responsive** : Android & iOS

## 🔧 Stack Technique

### Frontend Mobile
- **Framework** : React Native 0.72+
- **Language** : TypeScript
- **Navigation** : React Navigation v6
- **State Management** : Redux Toolkit
- **UI Components** : Custom Design System
- **Security** : React Native Keychain, Biometrics

### Backend API
- **Framework** : Laravel 10+
- **Database** : MySQL 8.0+
- **Authentication** : Laravel Sanctum + JWT
- **API** : RESTful API
- **Security** : Rate limiting, CORS, Validation

## 🚀 Fonctionnalités

### 🔐 Authentification
- [x] Connexion par numéro + mot de passe
- [x] Authentification OTP SMS
- [x] Enregistrement avec validation
- [x] Réinitialisation mot de passe
- [x] Authentification biométrique

### 📊 Dashboard
- [x] Affichage solde en temps réel
- [x] Historique des transactions
- [x] Échéancier des crédits
- [x] Notifications push

### 💰 Prêts TAKA
- [x] Consultation des offres
- [x] Simulation de crédit
- [x] Décaissement instantané
- [x] Suivi des remboursements

### 💸 Virements
- [x] Virement entre comptes Baobab
- [x] Virement vers utilisateurs Baobab
- [x] Virement vers commerçants (QR code)

### 📱 Mobile Money
- [x] Transfert vers Mobile Money (Orange Money, Wave)
- [x] Dépôt depuis Mobile Money
- [x] Simulateurs d'API intégrés

### 👤 Profil Utilisateur
- [x] Modification des informations
- [x] Paramètres de sécurité
- [x] Conditions générales
- [x] Déconnexion sécurisée

## 🛠️ Installation

### Prérequis
- Node.js 18+
- PHP 8.1+
- Composer
- MySQL 8.0+
- React Native CLI
- Android Studio / Xcode

### Backend (Laravel)
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

### Mobile (React Native)
```bash
cd mobile
npm install
# Pour iOS
cd ios && pod install && cd ..
npx react-native run-ios

# Pour Android
npx react-native run-android
```

## 📱 Captures d'écran

*À venir...*

## 🤝 Contribution

Ce projet est développé pour des fins éducatives et de démonstration.

## 📄 Licence

MIT License

---

**Développé avec ❤️ pour la communauté bancaire sénégalaise**

