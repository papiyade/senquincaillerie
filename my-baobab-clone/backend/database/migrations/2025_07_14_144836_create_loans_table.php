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
        Schema::create('loans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('account_id')->constrained()->onDelete('cascade');
            $table->decimal('amount', 15, 2); // Montant du prêt
            $table->decimal('interest_rate', 5, 2); // Taux d'intérêt (%)
            $table->integer('duration_months'); // Durée en mois
            $table->decimal('monthly_payment', 15, 2); // Mensualité
            $table->decimal('total_amount', 15, 2); // Montant total à rembourser
            $table->decimal('remaining_amount', 15, 2); // Montant restant
            $table->enum('status', ['pending', 'approved', 'disbursed', 'active', 'completed', 'defaulted'])->default('pending');
            $table->timestamp('disbursed_at')->nullable();
            $table->date('due_date'); // Date d'échéance finale
            $table->date('next_payment_date')->nullable(); // Prochaine échéance
            $table->json('eligibility_data')->nullable(); // Données d'éligibilité
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loans');
    }
};
