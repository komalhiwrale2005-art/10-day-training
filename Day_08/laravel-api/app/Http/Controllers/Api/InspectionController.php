<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Inspection;
use Illuminate\Http\Request;

class InspectionController extends Controller
{
    // Get all inspections
    public function index()
    {
        $inspections = Inspection::with('facility')->get();

        return response()->json([
            'success' => true,
            'data' => $inspections
        ], 200);
    }

    // Create a new inspection
    public function store(Request $request)
    {
        $validated = $request->validate([
            'facility_id' => 'required|exists:facilities,id',
            'inspection_date' => 'required|date',
            'inspector_name' => 'required|string|max:255',
            'cleanliness_score' => 'nullable|integer|min:0|max:100',
            'remarks' => 'nullable|string',
        ]);

        $inspection = Inspection::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Inspection created successfully',
            'data' => $inspection->load('facility')
        ], 201);
    }

    // Get a single inspection
    public function show(Inspection $inspection)
    {
        return response()->json([
            'success' => true,
            'data' => $inspection->load('facility')
        ], 200);
    }

    // Update an inspection
    public function update(Request $request, Inspection $inspection)
    {
        $validated = $request->validate([
            'facility_id' => 'sometimes|required|exists:facilities,id',
            'inspection_date' => 'sometimes|required|date',
            'inspector_name' => 'sometimes|required|string|max:255',
            'cleanliness_score' => 'sometimes|nullable|integer|min:0|max:100',
            'remarks' => 'sometimes|nullable|string',
        ]);

        $inspection->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Inspection updated successfully',
            'data' => $inspection->fresh()->load('facility')
        ], 200);
    }

    // Delete an inspection
    public function destroy(Inspection $inspection)
    {
        $inspection->delete();

        return response()->json([
            'success' => true,
            'message' => 'Inspection deleted successfully'
        ], 200);
    }
}
