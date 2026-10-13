
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\FacilityController;
use App\Http\Controllers\Api\InspectionController;
use App\Http\Controllers\Api\ComplaintController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\EmployeeController;

Route::apiResource('facilities', FacilityController::class);
Route::apiResource('inspections', InspectionController::class);
Route::apiResource('complaints', ComplaintController::class);

Route::apiResource('departments', DepartmentController::class);
Route::apiResource('employees', EmployeeController::class);
