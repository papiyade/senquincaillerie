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
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('account_number')->unique();
            $table->enum('account_type', ['savings', 'current', 'taka'])->default('savings');
            $table->decimal('balance', 15, 2)->default(0);
            $table->string('currency', 3)->default('XOF'); // Franc CFA
            $table->enum('status', ['active', 'inactive', 'frozen'])->default('active');
            $table->decimal('daily_limit', 15, 2)->default(500000); // Limite journalière
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accounts');
    }
};
