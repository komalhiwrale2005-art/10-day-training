<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class EmployeeController extends Controller
{
    public function index()
    {
        return response()->json(
            Employee::with('department')->get()
        );
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:employees,email',
            'salary' => 'required|numeric|min:0',
            'department_id' => 'nullable|exists:departments,id',
        ]);

        $employee = Employee::create($validated);

        return response()->json(
            $employee->load('department'),
            201
        );
    }

    public function show(Employee $employee)
    {
        return response()->json(
            $employee->load('department')
        );
    }

    public function update(Request $request, Employee $employee)
    {
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'email' => [
                'sometimes',
                'required',
                'email',
                'max:255',
                Rule::unique('employees', 'email')->ignore($employee->id),
            ],
            'salary' => 'sometimes|required|numeric|min:0',
            'department_id' => 'sometimes|nullable|exists:departments,id',
        ]);

        $employee->update($validated);

        return response()->json(
            $employee->load('department')
        );
    }

    public function destroy(Employee $employee)
    {
        $employee->delete();

        return response()->json([
            'message' => 'Employee deleted successfully'
        ]);
    }
}
