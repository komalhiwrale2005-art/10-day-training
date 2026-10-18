
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FacilityService } from '../../services/facility-service';
import { Facility as ApiFacility } from '../../models/facility.model';
import { InspectionService } from '../../services/inspection-service';

interface Facility {
  id: number;
  name: string;
  location: string;
  facility_type: string;
  description: string | null;
  is_active: number;
  created_at: string;
  updated_at: string;
  status: 'Pending' | 'Completed';
  cleanliness: number;
}

interface Inspection {
  id?: number;
  facility_id?: number;
  facility: string;
  date: string;
  notes: string;
  cleanliness: number;
  inspectorName: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  showInspectionForm = false;

  searchText = '';
  selectedStatus = 'All';
  sortOrder = 'asc';

  inspectionFacility = '';
  inspectionDate = '';
  inspectionNotes = '';
  inspectorName = '';
  cleanlinessScore = 0;

  facilities: Facility[] = [];
  inspectionHistory: Inspection[] = [];

  loading = false;
  savingInspection = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private facilityService: FacilityService,
    private inspectionService: InspectionService
  ) {}

  ngOnInit(): void {
    this.loadFacilities();
    this.loadInspections();
  }

  loadFacilities(): void {
    this.loading = true;
    this.errorMessage = '';

    this.facilityService.getFacilities().subscribe({
      next: (response) => {
        this.facilities = response.data.map(
          (facility: ApiFacility) => ({
            ...facility,
            status: 'Pending' as const,
            cleanliness: 0
          })
        );

        this.loading = false;
        this.updateFacilityStatuses();
      },
      error: (error) => {
        console.error('Facilities API error:', error);

        this.errorMessage =
          'Unable to load facilities. Check the Laravel server.';

        this.loading = false;
      }
    });
  }

  loadInspections(): void {
    this.inspectionService.getInspections().subscribe({
      next: (response) => {
        if (response.success && Array.isArray(response.data)) {
          this.inspectionHistory = response.data.map((item: any) => ({
            id: item.id,
            facility_id: item.facility_id,
            facility: item.facility?.name ?? 'Unknown facility',
            date: item.inspection_date,
            notes: item.remarks ?? '',
            cleanliness: item.cleanliness_score ?? 0,
            inspectorName: item.inspector_name ?? 'Not provided'
          }));

          this.updateFacilityStatuses();
        }
      },
      error: (error) => {
        console.error('Inspections API error:', error);
      }
    });
  }

  updateFacilityStatuses(): void {
    for (const facility of this.facilities) {
      const facilityInspections = this.inspectionHistory
        .filter(item => Number(item.facility_id) === facility.id)
        .sort((a, b) => b.date.localeCompare(a.date));

      if (facilityInspections.length > 0) {
        facility.status = 'Completed';
        facility.cleanliness = facilityInspections[0].cleanliness;
      } else {
        facility.status = 'Pending';
        facility.cleanliness = 0;
      }
    }
  }

  get totalFacilities(): number {
    return this.facilities.length;
  }

  get pendingInspections(): number {
    return this.facilities.filter(
      facility => facility.status === 'Pending'
    ).length;
  }

  get completedInspections(): number {
    return this.facilities.filter(
      facility => facility.status === 'Completed'
    ).length;
  }

  get averageCleanliness(): number {
    const inspected = this.facilities.filter(
      facility => facility.status === 'Completed'
    );

    if (inspected.length === 0) {
      return 0;
    }

    const total = inspected.reduce(
      (sum, facility) => sum + facility.cleanliness,
      0
    );

    return Math.round(total / inspected.length);
  }

  get filteredFacilities(): Facility[] {
    return this.facilities
      .filter(facility =>
        (
          facility.name + ' ' +
          facility.facility_type + ' ' +
          facility.location
        ).toLowerCase().includes(this.searchText.toLowerCase())
      )
      .filter(facility =>
        this.selectedStatus === 'All' ||
        facility.status === this.selectedStatus
      )
      .sort((a, b) => {
        const comparison = a.name.localeCompare(b.name);

        return this.sortOrder === 'asc'
          ? comparison
          : -comparison;
      });
  }

  submitInspection(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (
      !this.inspectionFacility ||
      !this.inspectionDate ||
      !this.inspectorName.trim()
    ) {
      this.errorMessage =
        'Please select a facility, date, and inspector name.';
      return;
    }

    const selectedFacility = this.facilities.find(
      facility => facility.id === Number(this.inspectionFacility)
    );

    if (!selectedFacility) {
      this.errorMessage = 'Please select a valid facility.';
      return;
    }

    if (
      !Number.isInteger(this.cleanlinessScore) ||
      this.cleanlinessScore < 0 ||
      this.cleanlinessScore > 100
    ) {
      this.errorMessage =
        'Cleanliness score must be a whole number between 0 and 100.';
      return;
    }

    const inspectionData = {
      facility_id: selectedFacility.id,
      inspection_date: this.inspectionDate,
      inspector_name: this.inspectorName.trim(),
      cleanliness_score: this.cleanlinessScore,
      remarks: this.inspectionNotes.trim()
    };

    this.savingInspection = true;

    this.inspectionService.addInspection(inspectionData).subscribe({
      next: (response) => {
        this.savingInspection = false;

        if (response.success) {
          this.successMessage = 'Inspection saved successfully!';

          this.inspectionFacility = '';
          this.inspectionDate = '';
          this.inspectionNotes = '';
          this.inspectorName = '';
          this.cleanlinessScore = 0;
          this.showInspectionForm = false;

          this.loadInspections();
        } else {
          this.errorMessage =
            'The inspection could not be saved.';
        }
      },
      error: (error) => {
        this.savingInspection = false;
        console.error('Save inspection error:', error);

        if (error.status === 422 && error.error?.errors) {
          this.errorMessage = Object.values(
            error.error.errors
          ).flat().join(' ');
        } else {
          this.errorMessage =
            'Unable to save inspection. Check the Laravel server and try again.';
        }
      }
    });
  }
}
