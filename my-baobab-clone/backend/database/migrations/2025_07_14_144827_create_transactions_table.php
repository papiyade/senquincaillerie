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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('account_id')->constrained()->onDelete('cascade');
            $table->enum('type', ['credit', 'debit']);
            $table->enum('category', ['transfer', 'deposit', 'withdrawal', 'loan_disbursement', 'loan_repayment', 'mobile_money', 'fees']);
            $table->decimal('amount', 15, 2);
            $table->string('currency', 3)->default('XOF');
            $table->string('description');
            $table->string('reference')->unique();
            $table->enum('status', ['pending', 'completed', 'failed', 'cancelled'])->default('pending');
            $table->json('metadata')->nullable(); // Données supplémentaires
            $table->foreignId('related_account_id')->nullable()->constrained('accounts'); // Compte destinataire
            $table->decimal('fees', 10, 2)->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
