// ─── Horizon Support Services · NDIS Platform · Mock Data ─────────────────────

export type ParticipantStatus = 'active' | 'pending' | 'suspended' | 'exited';
export type RiskLevel = 'low' | 'medium' | 'high' | 'critical';

export interface Participant {
  id: string;
  name: string;
  avatar: string;
  ndisNumber: string;
  dob: string;
  age: number;
  primaryDisability: string;
  secondaryDisability?: string;
  status: ParticipantStatus;
  riskLevel: RiskLevel;
  coordinator: string;
  supportWorker: string;
  suburb: string;
  state: string;
  phone: string;
  email: string;
  address: string;
  planStartDate: string;
  planEndDate: string;
  fundingTotal: number;
  fundingSpent: number;
  fundingRemaining: number;
  emergencyContact: { name: string; relation: string; phone: string };
  goals: string[];
  medicalAlerts: string[];
  behaviourNotes: string;
  accessibilityReqs: string[];
}

export const participants: Participant[] = [
  {
    id: 'P001',
    name: 'Sarah Chen',
    avatar: 'SC',
    ndisNumber: '430 512 890',
    dob: '1992-03-14',
    age: 32,
    primaryDisability: 'Autism Spectrum Disorder',
    secondaryDisability: 'Anxiety Disorder',
    status: 'active',
    riskLevel: 'low',
    coordinator: 'Brooke Simmons',
    supportWorker: 'Sophie Anderson',
    suburb: 'Knox',
    state: 'VIC',
    phone: '0412 345 678',
    email: 'sarah.chen@email.com',
    address: '24 Elm Crescent, Knox VIC 3152',
    planStartDate: '2025-01-15',
    planEndDate: '2026-01-14',
    fundingTotal: 48750,
    fundingSpent: 28300,
    fundingRemaining: 20450,
    emergencyContact: { name: 'Linda Chen', relation: 'Mother', phone: '0498 765 432' },
    goals: ['Increase community participation by attending two social activities per week', 'Develop cooking skills to prepare three independent meals weekly', 'Build workplace readiness skills for supported employment', 'Improve public transport navigation'],
    medicalAlerts: ['Severe nut allergy — carry EpiPen at all times', 'Sensory sensitivities — avoid loud environments without preparation'],
    behaviourNotes: 'Sarah responds well to clear routines and advance notice of changes. Provide 10-minute warnings before transitions. She prefers written instructions over verbal.',
    accessibilityReqs: ['Sensory-friendly environments', 'Written schedules provided 24h in advance', 'Low-stimulation meeting spaces'],
  },
  {
    id: 'P002',
    name: 'Michael Torres',
    avatar: 'MT',
    ndisNumber: '318 897 241',
    dob: '1979-07-22',
    age: 45,
    primaryDisability: 'Spinal Cord Injury (T6)',
    status: 'active',
    riskLevel: 'medium',
    coordinator: 'Brooke Simmons',
    supportWorker: 'Marcus Williams',
    suburb: 'Richmond',
    state: 'VIC',
    phone: '0431 876 543',
    email: 'm.torres@gmail.com',
    address: '8/42 Swan Street, Richmond VIC 3121',
    planStartDate: '2024-08-01',
    planEndDate: '2025-07-31',
    fundingTotal: 125000,
    fundingSpent: 98400,
    fundingRemaining: 26600,
    emergencyContact: { name: 'Rosa Torres', relation: 'Wife', phone: '0412 000 111' },
    goals: ['Maintain independence in daily self-care routine', 'Attend hydrotherapy twice weekly for pain management', 'Participate in adaptive sport program', 'Review and update home modifications for increased accessibility'],
    medicalAlerts: ['Autonomic dysreflexia risk — know emergency protocol', 'Pressure injury prevention — reposition every 2 hours', 'Catheter management required'],
    behaviourNotes: 'Michael is highly independent and motivated. Prefers support workers who follow his lead rather than directing his care. Very knowledgeable about his own condition.',
    accessibilityReqs: ['Wheelchair-accessible vehicle', 'Accessible bathroom with ceiling hoist', 'Height-adjustable work surfaces'],
  },
  {
    id: 'P003',
    name: 'Emma Walsh',
    avatar: 'EW',
    ndisNumber: '521 334 007',
    dob: '2017-05-03',
    age: 7,
    primaryDisability: 'Cerebral Palsy (Diplegia)',
    secondaryDisability: 'Communication Difficulty',
    status: 'active',
    riskLevel: 'low',
    coordinator: 'Brooke Simmons',
    supportWorker: 'Sophie Anderson',
    suburb: 'Doncaster',
    state: 'VIC',
    phone: '0498 234 567',
    email: 'walsh.family@outlook.com',
    address: '15 Birchwood Drive, Doncaster VIC 3108',
    planStartDate: '2025-03-01',
    planEndDate: '2026-02-28',
    fundingTotal: 62000,
    fundingSpent: 18900,
    fundingRemaining: 43100,
    emergencyContact: { name: 'Claire Walsh', relation: 'Mother', phone: '0412 890 123' },
    goals: ['Improve gross motor skills — walking 50m unaided by end of plan', 'Increase expressive communication using AAC device', 'Participate in kindergarten activities with peers', 'Build fine motor skills for self-care tasks'],
    medicalAlerts: ['Epilepsy — seizure management plan on file', 'Gastrostomy tube — refer to feeding protocol'],
    behaviourNotes: 'Emma is a happy child who responds well to music and play-based therapy. She uses a Tobii eye-gaze device for communication. Mum Claire is closely involved in all sessions.',
    accessibilityReqs: ['Wheelchair or walker for mobility', 'AAC device available at all sessions', 'Positioning equipment (standing frame)'],
  },
  {
    id: 'P004',
    name: 'James Okafor',
    avatar: 'JO',
    ndisNumber: '674 219 833',
    dob: '1998-11-18',
    age: 26,
    primaryDisability: 'Intellectual Disability',
    secondaryDisability: 'Epilepsy',
    status: 'active',
    riskLevel: 'medium',
    coordinator: 'Priya Patel',
    supportWorker: 'Amara Osei',
    suburb: 'Brunswick',
    state: 'VIC',
    phone: '0423 567 890',
    email: 'james.okafor@email.com',
    address: '77 Lygon Street, Brunswick VIC 3056',
    planStartDate: '2024-12-01',
    planEndDate: '2025-11-30',
    fundingTotal: 58400,
    fundingSpent: 41200,
    fundingRemaining: 17200,
    emergencyContact: { name: 'Victor Okafor', relation: 'Father', phone: '0411 234 567' },
    goals: ['Secure and maintain supported employment for 15 hours per week', 'Live independently in shared house by mid-plan', 'Manage finances with minimal support', 'Develop public transport skills across Melbourne network'],
    medicalAlerts: ['Epilepsy — rescue medication in bag at all times', 'Do not leave alone during known seizure triggers (fatigue, lights)'],
    behaviourNotes: 'James is sociable and motivated. He benefits from clear, consistent expectations and visual schedules. He is working toward greater independence and should be encouraged to problem-solve first.',
    accessibilityReqs: ['Easy-read materials', 'Step-by-step visual instructions', 'Seizure first aid trained staff only'],
  },
  {
    id: 'P005',
    name: 'Linda Murphy',
    avatar: 'LM',
    ndisNumber: '219 456 374',
    dob: '1957-09-30',
    age: 67,
    primaryDisability: 'Multiple Sclerosis (Relapsing-Remitting)',
    status: 'active',
    riskLevel: 'high',
    coordinator: 'Brooke Simmons',
    supportWorker: 'Priya Sharma',
    suburb: 'Hawthorn',
    state: 'VIC',
    phone: '0487 654 321',
    email: 'linda.murphy67@gmail.com',
    address: '3 Finch Street, Hawthorn VIC 3122',
    planStartDate: '2024-06-15',
    planEndDate: '2025-06-14',
    fundingTotal: 95000,
    fundingSpent: 87000,
    fundingRemaining: 8000,
    emergencyContact: { name: 'Tom Murphy', relation: 'Husband', phone: '0412 000 222' },
    goals: ['Maintain mobility and independence in home environment', 'Attend weekly physiotherapy sessions for strength and balance', 'Manage fatigue with energy conservation strategies', 'Engage in meaningful social activities twice monthly'],
    medicalAlerts: ['Falls risk — use gait aid at all times', 'Heat sensitivity — avoid exertion in high temperatures', 'Bladder urgency — plan bathroom access in advance'],
    behaviourNotes: 'Linda is a dignified, independent woman who values her privacy and autonomy. She may resist support — approach with respect. Fatigue significantly affects her capacity in the afternoons.',
    accessibilityReqs: ['Rollator walker for outings', 'Accessible vehicle with grab handles', 'Non-slip surfaces in bathroom'],
  },
  {
    id: 'P006',
    name: 'Ryan Kim',
    avatar: 'RK',
    ndisNumber: '887 031 592',
    dob: '2002-02-14',
    age: 22,
    primaryDisability: 'Acquired Brain Injury',
    secondaryDisability: 'PTSD',
    status: 'pending',
    riskLevel: 'high',
    coordinator: 'Priya Patel',
    supportWorker: 'Marcus Williams',
    suburb: 'Footscray',
    state: 'VIC',
    phone: '0432 109 876',
    email: 'ryan.kim@email.com',
    address: '15B Pilgrim Street, Footscray VIC 3011',
    planStartDate: '2025-06-01',
    planEndDate: '2026-05-31',
    fundingTotal: 112000,
    fundingSpent: 8400,
    fundingRemaining: 103600,
    emergencyContact: { name: 'Ji-Young Kim', relation: 'Mother', phone: '0498 333 444' },
    goals: ['Regain capacity for activities of daily living', 'Access community social activities with support', 'Engage in behaviour support program consistently', 'Explore vocational rehabilitation options'],
    medicalAlerts: ['Seizure history — monitor for triggers', 'Impulse control difficulties — ensure safe environments', 'Mental health crisis plan on file'],
    behaviourNotes: 'Ryan is in early stages of engagement. He is guarded and can be resistant. Build rapport slowly. His mother Ji-Young is a key support — include her in planning where Ryan consents.',
    accessibilityReqs: ['Trauma-informed approach essential', 'Quiet, low-stimulation environments', 'Advance notice of all changes'],
  },
];

export const supportWorkers = [
  {
    id: 'W001',
    name: 'Sophie Anderson',
    avatar: 'SA',
    role: 'Senior Support Worker',
    employmentType: 'Full-time',
    status: 'active',
    email: 'sophie.a@horizonsupport.com.au',
    phone: '0412 111 222',
    suburb: 'Box Hill',
    participantIds: ['P001', 'P003'],
    qualifications: ['Certificate IV in Disability', 'Diploma of Community Services'],
    workerScreening: { status: 'current', expiryDate: '2027-03-15' },
    firstAid: { status: 'current', expiryDate: '2025-12-01' },
    cpr: { status: 'current', expiryDate: '2025-12-01' },
    policeCheck: { status: 'current', expiryDate: '2026-08-20' },
    availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    hoursThisWeek: 32,
    shifts: 6,
  },
  {
    id: 'W002',
    name: 'Marcus Williams',
    avatar: 'MW',
    role: 'Support Worker',
    employmentType: 'Casual',
    status: 'active',
    email: 'marcus.w@horizonsupport.com.au',
    phone: '0432 222 333',
    suburb: 'Richmond',
    participantIds: ['P002', 'P006'],
    qualifications: ['Certificate III in Individual Support'],
    workerScreening: { status: 'current', expiryDate: '2026-11-30' },
    firstAid: { status: 'expiring', expiryDate: '2025-08-15' },
    cpr: { status: 'expiring', expiryDate: '2025-08-15' },
    policeCheck: { status: 'current', expiryDate: '2027-01-10' },
    availability: ['Mon', 'Wed', 'Fri', 'Sat'],
    hoursThisWeek: 18,
    shifts: 4,
  },
  {
    id: 'W003',
    name: 'Priya Sharma',
    avatar: 'PS',
    role: 'Support Worker',
    employmentType: 'Part-time',
    status: 'active',
    email: 'priya.s@horizonsupport.com.au',
    phone: '0423 333 444',
    suburb: 'Brunswick',
    participantIds: ['P005'],
    qualifications: ['Certificate IV in Disability', 'Cert IV Mental Health'],
    workerScreening: { status: 'current', expiryDate: '2028-01-20' },
    firstAid: { status: 'current', expiryDate: '2026-04-10' },
    cpr: { status: 'current', expiryDate: '2026-04-10' },
    policeCheck: { status: 'current', expiryDate: '2026-10-05' },
    availability: ['Tue', 'Wed', 'Thu'],
    hoursThisWeek: 22,
    shifts: 4,
  },
  {
    id: 'W004',
    name: 'Jake Williams',
    avatar: 'JW',
    role: 'Support Worker',
    employmentType: 'Casual',
    status: 'leave',
    email: 'jake.w@horizonsupport.com.au',
    phone: '0411 444 555',
    suburb: 'Footscray',
    participantIds: [],
    qualifications: ['Certificate III in Individual Support'],
    workerScreening: { status: 'current', expiryDate: '2026-05-22' },
    firstAid: { status: 'expired', expiryDate: '2025-02-28' },
    cpr: { status: 'expired', expiryDate: '2025-02-28' },
    policeCheck: { status: 'expired', expiryDate: '2024-12-15' },
    availability: [],
    hoursThisWeek: 0,
    shifts: 0,
  },
  {
    id: 'W005',
    name: 'Amara Osei',
    avatar: 'AO',
    role: 'Senior Support Worker',
    employmentType: 'Full-time',
    status: 'active',
    email: 'amara.o@horizonsupport.com.au',
    phone: '0498 555 666',
    suburb: 'Northcote',
    participantIds: ['P004'],
    qualifications: ['Bachelor of Social Work', 'Certificate IV in Disability'],
    workerScreening: { status: 'current', expiryDate: '2028-09-10' },
    firstAid: { status: 'current', expiryDate: '2026-09-10' },
    cpr: { status: 'current', expiryDate: '2026-09-10' },
    policeCheck: { status: 'current', expiryDate: '2027-06-15' },
    availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    hoursThisWeek: 38,
    shifts: 7,
  },
];

export const referrals = [
  { id: 'R001', name: 'Alexandra Petrov', disability: 'Stroke / ABI', referredBy: 'Box Hill Hospital', date: '2025-07-18', services: ['Core Supports', 'Allied Health'], stage: 'new', priority: 'high', suburb: 'Box Hill' },
  { id: 'R002', name: 'David Nguyen', disability: 'Intellectual Disability', referredBy: 'Support Coordinator – EACH', date: '2025-07-15', services: ['SIL', 'Community Participation'], stage: 'eligibility', priority: 'medium', suburb: 'Doncaster' },
  { id: 'R003', name: 'Fatima Al-Hassan', disability: 'Cerebral Palsy', referredBy: 'Self-referral', date: '2025-07-10', services: ['Support Coordination', 'OT'], stage: 'documents', priority: 'medium', suburb: 'Dandenong' },
  { id: 'R004', name: 'Benjamin Clark', disability: 'Autism + ADHD', referredBy: 'Monash Medical Centre', date: '2025-07-05', services: ['Behaviour Support', 'Core Supports'], stage: 'assessment', priority: 'high', suburb: 'Clayton' },
  { id: 'R005', name: 'Maria Santos', disability: 'MS – Primary Progressive', referredBy: 'MS Society Victoria', date: '2025-06-28', services: ['Allied Health', 'Core Supports'], stage: 'agreement', priority: 'medium', suburb: 'Preston' },
  { id: 'R006', name: 'Thomas Lee', disability: 'Epilepsy + Intellectual Disability', referredBy: 'Family referral', date: '2025-06-20', services: ['SIL', 'Support Coordination'], stage: 'ready', priority: 'low', suburb: 'Sunshine' },
  { id: 'R007', name: 'Grace Andersen', disability: 'Spina Bifida', referredBy: 'Royal Childrens Hospital', date: '2025-06-01', services: ['Early Childhood', 'OT', 'Physio'], stage: 'active', priority: 'low', suburb: 'Heidelberg' },
];

export const appointments = [
  { id: 'A001', participant: 'Sarah Chen', worker: 'Sophie Anderson', service: 'Community Participation', date: '2025-07-22', startTime: '09:00', endTime: '12:00', suburb: 'Knox', status: 'confirmed', color: 'bg-violet-400' },
  { id: 'A002', participant: 'Michael Torres', worker: 'Marcus Williams', service: 'Personal Care', date: '2025-07-22', startTime: '07:30', endTime: '09:30', suburb: 'Richmond', status: 'confirmed', color: 'bg-blue-400' },
  { id: 'A003', participant: 'James Okafor', worker: 'Amara Osei', service: 'Employment Support', date: '2025-07-22', startTime: '10:00', endTime: '14:00', suburb: 'Brunswick', status: 'confirmed', color: 'bg-emerald' },
  { id: 'A004', participant: 'Linda Murphy', worker: 'Priya Sharma', service: 'Domestic Assistance', date: '2025-07-22', startTime: '13:00', endTime: '15:00', suburb: 'Hawthorn', status: 'pending', color: 'bg-amber-400' },
  { id: 'A005', participant: 'Emma Walsh', worker: 'Sophie Anderson', service: 'Occupational Therapy', date: '2025-07-22', startTime: '15:30', endTime: '16:30', suburb: 'Doncaster', status: 'confirmed', color: 'bg-rose-400' },
  { id: 'A006', participant: 'Ryan Kim', worker: 'Marcus Williams', service: 'Community Access', date: '2025-07-23', startTime: '10:00', endTime: '13:00', suburb: 'Footscray', status: 'confirmed', color: 'bg-blue-400' },
];

export const progressNotes = [
  { id: 'N001', participant: 'Sarah Chen', worker: 'Sophie Anderson', date: '2025-07-21', shift: 'Community Participation – Morning', goals: ['Community participation', 'Social skills'], activities: 'Attended Mazenod College art class. Sarah interacted with two new participants and completed a painting. Took public bus home independently.', outcomes: 'Strong engagement, excellent social interaction. Successfully used Myki card without prompting.', concerns: null, mood: 'happy', status: 'approved', supervisor: 'Brooke Simmons' },
  { id: 'N002', participant: 'Michael Torres', worker: 'Marcus Williams', date: '2025-07-21', shift: 'Personal Care – Morning', goals: ['Daily self-care', 'Independence'], activities: 'Assisted with morning routine including showering, dressing, and breakfast preparation. Michael directed all care independently.', outcomes: "All ADLs completed to participant's satisfaction. Michael in good spirits.", concerns: 'Noted some increased spasticity in lower limbs — flagged for physiotherapist review.', mood: 'neutral', status: 'pending', supervisor: 'Brooke Simmons' },
  { id: 'N003', participant: 'James Okafor', worker: 'Amara Osei', date: '2025-07-20', shift: 'Employment Support', goals: ['Employment readiness', 'Independence'], activities: 'Supported James at Good Cycles workshop. He completed bicycle maintenance tasks under supervision. Also practiced morning routine and public transport journey.', outcomes: 'Excellent shift — James arrived on time and completed all assigned tasks without prompting.', concerns: null, mood: 'happy', status: 'approved', supervisor: 'Priya Patel' },
  { id: 'N004', participant: 'Linda Murphy', worker: 'Priya Sharma', date: '2025-07-20', shift: 'Domestic Assistance', goals: ['Home independence', 'Fatigue management'], activities: 'Assisted with vacuuming, laundry, and meal preparation (slow cooker dinner). Linda rested for 30 minutes mid-shift as per fatigue management plan.', outcomes: 'Tasks completed. Linda fatiguing more quickly than usual — important to monitor.', concerns: "Fatigue significantly worse this week. Linda mentioned she hasn't been sleeping well. Suggested she raise with neurologist at next appointment.", mood: 'tired', status: 'approved', supervisor: 'Brooke Simmons' },
];

export const fundingData = {
  coreSupports: { total: 189500, spent: 134200, allocated: 189500, label: 'Core Supports' },
  capacityBuilding: { total: 87000, spent: 42300, allocated: 87000, label: 'Capacity Building' },
  capital: { total: 35000, spent: 28000, allocated: 35000, label: 'Capital Supports' },
};

export const complianceItems = [
  { id: 'C001', type: 'Worker Screening', item: 'Jake Williams — Police Check Expired', priority: 'critical', status: 'overdue', dueDate: '2024-12-15', assignedTo: 'Emma Kavanagh' },
  { id: 'C002', type: 'Worker Screening', item: 'Jake Williams — First Aid Expired', priority: 'critical', status: 'overdue', dueDate: '2025-02-28', assignedTo: 'Emma Kavanagh' },
  { id: 'C003', type: 'Worker Screening', item: 'Marcus Williams — First Aid Expiring in 24 Days', priority: 'high', status: 'due-soon', dueDate: '2025-08-15', assignedTo: 'Emma Kavanagh' },
  { id: 'C004', type: 'Progress Notes', item: 'Ryan Kim — 3 Shifts Missing Notes (Jul 15–17)', priority: 'high', status: 'overdue', dueDate: '2025-07-19', assignedTo: 'Marcus Williams' },
  { id: 'C005', type: 'Plan Review', item: 'Linda Murphy — NDIS Plan Expires in 21 Days', priority: 'high', status: 'due-soon', dueDate: '2025-08-12', assignedTo: 'Brooke Simmons' },
  { id: 'C006', type: 'Service Agreement', item: 'James Okafor — Agreement Unsigned (sent 14 days ago)', priority: 'medium', status: 'pending', dueDate: '2025-07-25', assignedTo: 'Priya Patel' },
  { id: 'C007', type: 'Documents', item: 'Ryan Kim — Behaviour Support Plan Overdue', priority: 'high', status: 'overdue', dueDate: '2025-07-01', assignedTo: 'Priya Patel' },
  { id: 'C008', type: 'Incidents', item: 'Incident IR-2025-007 — Corrective Action Overdue', priority: 'medium', status: 'overdue', dueDate: '2025-07-15', assignedTo: 'Brooke Simmons' },
];

export const incidents = [
  { id: 'IR-2025-009', participant: 'Ryan Kim', date: '2025-07-20', type: 'Restrictive Practice', severity: 'critical', status: 'open', reportedBy: 'Marcus Williams', summary: 'Participant became highly distressed during community access and required de-escalation. Episode lasted approximately 20 minutes. No injury sustained.' },
  { id: 'IR-2025-008', participant: 'Linda Murphy', date: '2025-07-18', type: 'Near Miss – Fall', severity: 'high', status: 'under-review', reportedBy: 'Priya Sharma', summary: 'Participant stumbled on uneven paving during community walk. Caught by worker. No injury. New route identified to avoid hazard.' },
  { id: 'IR-2025-007', participant: 'James Okafor', date: '2025-07-10', type: 'Property Damage', severity: 'medium', status: 'closed', reportedBy: 'Amara Osei', summary: 'Participant accidentally broke a window during a moment of frustration. Settled quickly. Property repaired. Behaviour support plan updated.' },
  { id: 'IR-2025-006', participant: 'Michael Torres', date: '2025-06-25', type: 'Medical Emergency', severity: 'critical', status: 'closed', reportedBy: 'Marcus Williams', summary: 'Participant experienced episode of autonomic dysreflexia. Ambulance called. Participant stabilised at home without hospital admission. Protocol reviewed with all workers.' },
];

export const messages = [
  { id: 'M001', from: 'Brooke Simmons', to: 'Sophie Anderson', subject: 'Sarah Chen — Community Participation Update', preview: 'Hi Sophie, just wanted to follow up on Sarah\'s session today at the art class. Can you send through the progress note before...', time: '10:32 AM', unread: true, avatar: 'BS' },
  { id: 'M002', from: 'Marcus Williams', to: 'Priya Patel', subject: 'Ryan Kim — Concern re: Yesterday\'s Session', preview: 'Hi Priya, I\'m a bit worried about Ryan\'s presentation yesterday. He was more agitated than usual and I had to use...', time: '9:15 AM', unread: true, avatar: 'MW' },
  { id: 'M003', from: 'Emma Kavanagh', to: 'All Staff', subject: 'REMINDER: Mandatory Training — 28 July 2025', preview: 'Team, please remember that our annual mandatory training day is coming up on Monday 28 July. Attendance is compulsory for all...', time: 'Yesterday', unread: false, avatar: 'EK' },
  { id: 'M004', from: 'Linda Chen (Family)', to: 'Brooke Simmons', subject: 'Sarah — Plan Review Preparation', preview: 'Hi Brooke, I wanted to check in before Sarah\'s plan review next month. I have a few goals I\'d like to discuss...', time: 'Yesterday', unread: false, avatar: 'LC' },
  { id: 'M005', from: 'Priya Patel', to: 'Emma Kavanagh', subject: 'James Okafor — Service Agreement', preview: 'Emma, James still hasn\'t signed his updated service agreement. I\'ve sent two reminders. Should we try calling Victor?', time: '2 days ago', unread: false, avatar: 'PP' },
];

export const weeklyFundingTrend = [
  { week: 'Jan', core: 24000, capacity: 8000, capital: 2000 },
  { week: 'Feb', core: 28000, capacity: 9200, capital: 1500 },
  { week: 'Mar', core: 31000, capacity: 7800, capital: 6000 },
  { week: 'Apr', core: 26000, capacity: 8500, capital: 3000 },
  { week: 'May', core: 29500, capacity: 9000, capital: 4500 },
  { week: 'Jun', core: 32000, capacity: 9800, capital: 5000 },
  { week: 'Jul', core: 18200, capacity: 5200, capital: 4000 },
];

export const participantFundingBreakdown = [
  { name: 'Core Supports', value: 134200, fill: '#00B4D8' },
  { name: 'Capacity Building', value: 42300, fill: '#10B981' },
  { name: 'Capital Supports', value: 28000, fill: '#8B5CF6' },
];
