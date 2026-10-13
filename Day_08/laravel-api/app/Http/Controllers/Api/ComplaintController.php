<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Complaint;
use Illuminate\Http\Request;

class ComplaintController extends Controller
{
    public function index()
    {
        return response()->json(
            Complaint::with('facility')->get()
        );
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'facility_id' => 'required|exists:facilities,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'status' => 'sometimes|in:pending,in_progress,resolved',
            'reported_by' => 'required|string|max:255',
        ]);

        $complaint = Complaint::create($validated);

        return response()->json($complaint, 201);
    }

    public function show(Complaint $complaint)
    {
        return response()->json(
            $complaint->load('facility')
        );
    }

    public function update(Request $request, Complaint $complaint)
    {
        $validated = $request->validate([
            'facility_id' => 'sometimes|required|exists:facilities,id',
            'title' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'status' => 'sometimes|in:pending,in_progress,resolved',
            'reported_by' => 'sometimes|required|string|max:255',
        ]);

        $complaint->update($validated);

        return response()->json($complaint);
    }

    public function destroy(Complaint $complaint)
    {
        $complaint->delete();

        return response()->json([
            'message' => 'Complaint deleted successfully',
        ]);
    }
}
