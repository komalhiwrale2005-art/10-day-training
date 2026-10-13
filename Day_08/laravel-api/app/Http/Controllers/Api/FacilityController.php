<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Facility;
use Illuminate\Http\Request;

class FacilityController extends Controller
{
    // Get all facilities
    public function index()
    {
        return response()->json([
            'success' => true,
            'data' => Facility::all()
        ]);
    }

    // Create a new facility
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'facility_type' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'is_active' => 'sometimes|boolean',
        ]);

        $facility = Facility::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Facility created successfully',
            'data' => $facility
        ], 201);
    }

    // Get one facility
    public function show(Facility $facility)
    {
        return response()->json([
            'success' => true,
            'data' => $facility
        ]);
    }

    // Update a facility
    public function update(Request $request, Facility $facility)
    {
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'location' => 'sometimes|required|string|max:255',
            'facility_type' => 'sometimes|nullable|string|max:255',
            'description' => 'sometimes|nullable|string',
            'is_active' => 'sometimes|boolean',
        ]);

        $facility->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Facility updated successfully',
            'data' => $facility->fresh()
        ]);
    }

    // Delete a facility
    public function destroy(Facility $facility)
    {
        $facility->delete();

        return response()->json([
            'success' => true,
            'message' => 'Facility deleted successfully'
        ]);
    }
}
