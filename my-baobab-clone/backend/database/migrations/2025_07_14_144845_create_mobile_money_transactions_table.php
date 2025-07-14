<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mobile_money_transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('account_id')->constrained()->onDelete('cascade');
            $table->enum('provider', ['orange_money', 'wave', 'free_money', 'wizall']); // Fournisseurs Mobile Money
            $table->string('phone_number'); // Numéro Mobile Money
            $table->decimal('amount', 15, 2);
            $table->enum('type', ['deposit', 'withdrawal']); // Dépôt ou retrait
            $table->string('reference')->unique(); // Référence de transaction
            $table->string('external_reference')->nullable(); // Référence du fournisseur
            $table->enum('status', ['pending', 'completed', 'failed', 'cancelled'])->default('pending');
            $table->decimal('fees', 10, 2)->default(0);
            $table->json('provider_response')->nullable(); // Réponse du fournisseur
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mobile_money_transactions');
    }
};
