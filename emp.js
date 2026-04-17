/* ============================================================
   SPOT ON TMS — Employee Portal Logic
   Separate from management portal (app.js)
   ============================================================ */

const EMP_ROLES = [
    {
        id: 'company-driver', name: 'Company Driver', icon: '🚛', color: '#3b82f6',
        desc: 'CDL company driver — over-the-road and local lanes.',
        docs: [
            { name: 'Employee Packet — Company Driver', desc: 'Your complete onboarding packet. Read and keep for reference.',
              viewUrl: 'https://docs.google.com/document/d/1CK20a7DFpNArkGmPb2DBWlnaVQlofnK1/preview',
              dlUrl:   'https://docs.google.com/document/d/1CK20a7DFpNArkGmPb2DBWlnaVQlofnK1/export?format=pdf' },
            { name: 'Driver Handbook', desc: 'Company policies, conduct expectations, and employment rules.',
              viewUrl: 'https://drive.google.com/file/d/1qrvo5AbvBFvGGmelLcTWzR5ba9_bKtwW/view',
              dlUrl:   'https://drive.google.com/uc?export=download&id=1qrvo5AbvBFvGGmelLcTWzR5ba9_bKtwW' },
            { name: 'Safety & Cell Phone Policy', desc: 'Accident procedures, pre-trip inspections, and device policy.',
              viewUrl: 'https://drive.google.com/file/d/166xpDxxLCauxitbhQzoyP4exPZmy6fLC/view',
              dlUrl:   'https://drive.google.com/uc?export=download&id=166xpDxxLCauxitbhQzoyP4exPZmy6fLC' },
            { name: 'Drug & Alcohol Policy', desc: 'Zero-tolerance drug and alcohol testing requirements.',
              viewUrl: 'https://docs.google.com/document/d/1dKM_Qh6L5wFCSPZ5YPJFPIfZN8DY5hSVJx4fhQWB920/preview',
              dlUrl:   'https://docs.google.com/document/d/1dKM_Qh6L5wFCSPZ5YPJFPIfZN8DY5hSVJx4fhQWB920/export?format=pdf' },
            { name: 'Time Off Request', desc: 'Submit PTO or time off requests here.',
              formUrl: 'https://docs.google.com/forms/d/1CU99zxLj9NzMW6F1Sn0cURZfP1kyp4us45L6GAqDQj0/viewform' },
            { name: 'Incident Report', desc: 'Report accidents, injuries, or equipment damage.',
              viewUrl: 'https://docs.google.com/document/d/1gEYr2mELqEhylkKvSFqwY4QO_YGV0VF1nhUQ7gLDM6I/preview',
              dlUrl:   'https://docs.google.com/document/d/1gEYr2mELqEhylkKvSFqwY4QO_YGV0VF1nhUQ7gLDM6I/export?format=pdf' },
        ]
    },
    {
        id: 'hostler-driver', name: 'Hostler Driver', icon: '🏗️', color: '#f59e0b',
        desc: 'Yard hostler / spotter driver at Cargill or Empire.',
        docs: [
            { name: 'Employee Packet — Hostler Driver', desc: 'Your complete onboarding packet.',
              viewUrl: 'https://docs.google.com/document/d/1-uZgmQdT-2qGUsnKNKtHkMYlSWcNF7F4/preview',
              dlUrl:   'https://docs.google.com/document/d/1-uZgmQdT-2qGUsnKNKtHkMYlSWcNF7F4/export?format=pdf' },
            { name: 'Driver Handbook', desc: 'Company policies and employment rules.',
              viewUrl: 'https://drive.google.com/file/d/1qrvo5AbvBFvGGmelLcTWzR5ba9_bKtwW/view',
              dlUrl:   'https://drive.google.com/uc?export=download&id=1qrvo5AbvBFvGGmelLcTWzR5ba9_bKtwW' },
            { name: 'Safety & Cell Phone Policy', desc: 'Accident procedures and device policy.',
              viewUrl: 'https://drive.google.com/file/d/166xpDxxLCauxitbhQzoyP4exPZmy6fLC/view',
              dlUrl:   'https://drive.google.com/uc?export=download&id=166xpDxxLCauxitbhQzoyP4exPZmy6fLC' },
            { name: 'Drug & Alcohol Policy', desc: 'Zero-tolerance testing requirements.',
              viewUrl: 'https://docs.google.com/document/d/1dKM_Qh6L5wFCSPZ5YPJFPIfZN8DY5hSVJx4fhQWB920/preview',
              dlUrl:   'https://docs.google.com/document/d/1dKM_Qh6L5wFCSPZ5YPJFPIfZN8DY5hSVJx4fhQWB920/export?format=pdf' },
            { name: 'Time Off Request', desc: 'Submit PTO or time off requests here.',
              formUrl: 'https://docs.google.com/forms/d/1CU99zxLj9NzMW6F1Sn0cURZfP1kyp4us45L6GAqDQj0/viewform' },
            { name: 'Incident Report', desc: 'Report accidents, injuries, or equipment damage.',
              viewUrl: 'https://docs.google.com/document/d/1gEYr2mELqEhylkKvSFqwY4QO_YGV0VF1nhUQ7gLDM6I/preview',
              dlUrl:   'https://docs.google.com/document/d/1gEYr2mELqEhylkKvSFqwY4QO_YGV0VF1nhUQ7gLDM6I/export?format=pdf' },
        ]
    },
    {
        id: 'building-staff', name: 'Building Staff', icon: '🏭', color: '#14b8a6',
        desc: 'Facility and building staff — non-driving roles.',
        docs: [
            { name: 'Employee Packet — Building Staff', desc: 'Your complete onboarding packet.', comingSoon: true },
            { name: 'Safety & Cell Phone Policy', desc: 'Accident procedures and device policy.',
              viewUrl: 'https://drive.google.com/file/d/166xpDxxLCauxitbhQzoyP4exPZmy6fLC/view',
              dlUrl:   'https://drive.google.com/uc?export=download&id=166xpDxxLCauxitbhQzoyP4exPZmy6fLC' },
            { name: 'Drug & Alcohol Policy', desc: 'Zero-tolerance testing requirements.',
              viewUrl: 'https://docs.google.com/document/d/1dKM_Qh6L5wFCSPZ5YPJFPIfZN8DY5hSVJx4fhQWB920/preview',
              dlUrl:   'https://docs.google.com/document/d/1dKM_Qh6L5wFCSPZ5YPJFPIfZN8DY5hSVJx4fhQWB920/export?format=pdf' },
            { name: 'Time Off Request', desc: 'Submit PTO or time off requests here.',
              formUrl: 'https://docs.google.com/forms/d/1CU99zxLj9NzMW6F1Sn0cURZfP1kyp4us45L6GAqDQj0/viewform' },
            { name: 'Incident Report', desc: 'Report accidents, injuries, or equipment damage.',
              viewUrl: 'https://docs.google.com/document/d/1gEYr2mELqEhylkKvSFqwY4QO_YGV0VF1nhUQ7gLDM6I/preview',
              dlUrl:   'https://docs.google.com/document/d/1gEYr2mELqEhylkKvSFqwY4QO_YGV0VF1nhUQ7gLDM6I/export?format=pdf' },
        ]
    },
    {
        id: 'owner-operator', name: 'Owner Operator', icon: '🤝', color: '#a855f7',
        desc: 'Independent owner-operators leased to Spot On.',
        docs: [
            { name: 'Employee Packet — Owner Operator', desc: 'Your complete onboarding packet.', comingSoon: true },
            { name: 'Owner Operator Lease Agreement', desc: 'Your lease agreement with Spot On Logistics.',
              viewUrl: 'https://docs.google.com/document/d/158ufjXygb8sXKaJ7K9NXdSek3go-Gtk9Fd6gtA4Zp-o/preview',
              dlUrl:   'https://docs.google.com/document/d/158ufjXygb8sXKaJ7K9NXdSek3go-Gtk9Fd6gtA4Zp-o/export?format=pdf' },
            { name: 'Driver Handbook', desc: 'Company policies and employment rules.',
              viewUrl: 'https://drive.google.com/file/d/1qrvo5AbvBFvGGmelLcTWzR5ba9_bKtwW/view',
              dlUrl:   'https://drive.google.com/uc?export=download&id=1qrvo5AbvBFvGGmelLcTWzR5ba9_bKtwW' },
            { name: 'Safety & Cell Phone Policy', desc: 'Accident procedures and device policy.',
              viewUrl: 'https://drive.google.com/file/d/166xpDxxLCauxitbhQzoyP4exPZmy6fLC/view',
              dlUrl:   'https://drive.google.com/uc?export=download&id=166xpDxxLCauxitbhQzoyP4exPZmy6fLC' },
            { name: 'Drug & Alcohol Policy', desc: 'Zero-tolerance testing requirements.',
              viewUrl: 'https://docs.google.com/document/d/1dKM_Qh6L5wFCSPZ5YPJFPIfZN8DY5hSVJx4fhQWB920/preview',
              dlUrl:   'https://docs.google.com/document/d/1dKM_Qh6L5wFCSPZ5YPJFPIfZN8DY5hSVJx4fhQWB920/export?format=pdf' },
            { name: 'Incident Report', desc: 'Report accidents, injuries, or equipment damage.',
              viewUrl: 'https://docs.google.com/document/d/1gEYr2mELqEhylkKvSFqwY4QO_YGV0VF1nhUQ7gLDM6I/preview',
              dlUrl:   'https://docs.google.com/document/d/1gEYr2mELqEhylkKvSFqwY4QO_YGV0VF1nhUQ7gLDM6I/export?format=pdf' },
        ]
    },
];

function renderEmpTiles() {
    const grid = document.getElementById('empTilesGrid');
    if (!grid) return;
    grid.innerHTML = EMP_ROLES.map(role => `
        <div class="emp-tile" onclick="openEmpRole('${role.id}')" style="border-top: 4px solid ${role.color};">
            <span class="emp-tile-icon">${role.icon}</span>
            <div class="emp-tile-name">${role.name}</div>
            <div class="emp-tile-desc">${role.desc}</div>
            <span class="emp-tile-count" style="background:${role.color}22;color:${role.color};">${role.docs.length} resources &rarr;</span>
        </div>`).join('');
}

function openEmpRole(roleId) {
    const role = EMP_ROLES.find(r => r.id === roleId);
    if (!role) return;
    document.getElementById('empViewHome').classList.add('hidden');
    document.getElementById('empViewRole').classList.remove('hidden');
    document.getElementById('empRoleTitle').innerHTML =
        `<span style="color:${role.color}">${role.icon}</span> ${role.name}`;
    document.getElementById('empRoleDocs').innerHTML = role.docs.map(doc => {
        if (doc.comingSoon) return `
            <div class="doc-card doc-coming-soon">
                <div class="doc-icon">&#128196;</div>
                <div class="doc-info"><div class="doc-name">${doc.name}</div><div class="doc-desc">${doc.desc}</div></div>
                <div class="doc-actions"><span class="doc-coming">Coming Soon</span></div>
            </div>`;
        if (doc.formUrl) return `
            <div class="doc-card">
                <div class="doc-icon">&#128203;</div>
                <div class="doc-info"><div class="doc-name">${doc.name}</div><div class="doc-desc">${doc.desc}</div></div>
                <div class="doc-actions"><a class="doc-btn view-btn" href="${doc.formUrl}" target="_blank">Fill Out &#8599;</a></div>
            </div>`;
        return `
            <div class="doc-card">
                <div class="doc-icon">&#128196;</div>
                <div class="doc-info"><div class="doc-name">${doc.name}</div><div class="doc-desc">${doc.desc}</div></div>
                <div class="doc-actions">
                    <a class="doc-btn view-btn" href="${doc.viewUrl}" target="_blank">View</a>
                    <a class="doc-btn dl-btn" href="${doc.dlUrl}">Download</a>
                </div>
            </div>`;
    }).join('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goEmpBack() {
    document.getElementById('empViewRole').classList.add('hidden');
    document.getElementById('empViewHome').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
