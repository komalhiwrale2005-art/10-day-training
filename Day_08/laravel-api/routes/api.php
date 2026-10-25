
<?php

use Illuminate\Support\Facades\Route;
Route::get('/health-check', function () {
    return response()->json(['status' => 'Laravel API working']);
});
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
