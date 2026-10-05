/**
 * Weekly Focus - PWA & Productivity Operating System
 * Modular, clean, local-first logic
 */

(function () {
  'use strict';

  // =========================================================================
  // SCHEDULE DATA SPECIFICATION
  // =========================================================================

  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const SHORT_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Complete schedule mapping (Times in 24hr minutes for active detection)
  const SCHEDULE_DATA = {
    // 0: Sunday, 1: Monday, ..., 6: Saturday
    1: [ // Monday
      { time: '6:45 – 7:00', startM: 405, endM: 420, title: 'Wake + Freshen', desc: 'Wake up, freshen up, light exercise / meditation' },
      { time: '7:00 – 8:00', startM: 420, endM: 480, title: 'DSA', desc: 'Daily problem solving + revision' },
      { time: '8:00 – 9:15', startM: 480, endM: 555, title: 'Breakfast + Get Ready', desc: 'Breakfast, get ready, leave for college' },
      { time: '9:15 – 9:40', startM: 555, endM: 580, title: 'Travel', desc: 'Commute to college' },
      { time: '9:40 – 4:20', startM: 580, endM: 980, title: 'College', desc: 'College (Classes & Labs)' },
      { time: '4:20 – 5:30', startM: 980, endM: 1050, title: 'Travel + Hostel + Snack', desc: 'Travel back, reach hostel, snack & decompress' },
      { time: '5:30 – 6:00', startM: 1050, endM: 1080, title: 'Decompression', desc: 'Real break / decompression (Relax)' },
      { time: '6:00 – 7:30', startM: 1080, endM: 1170, title: 'CampusUnstop', desc: 'Full-stack development (Events, Auth & Calendar)' },
      { time: '7:30 – 8:00', startM: 1170, endM: 1200, title: 'Dinner', desc: 'Dinner & evening recharge' },
      { time: '8:00 – 9:15', startM: 1200, endM: 1275, title: 'Academics', desc: 'College notes, assignments & exam prep' },
      { time: '9:15 – 9:30', startM: 1275, endM: 1290, title: 'Break', desc: 'Short breather & hydration' },
      { time: '9:30 – 10:15', startM: 1290, endM: 1335, title: 'DSA Review', desc: 'Review morning DSA problems + college revision' },
      { time: '10:15 – 10:30', startM: 1335, endM: 1350, title: 'Plan Tomorrow', desc: 'Review timetable & set 3 key priorities' },
      { time: '10:30 onwards', startM: 1350, endM: 1440, title: 'Wind Down + Sleep', desc: 'Protect recovery & consistency (7–8 hrs)' }
    ],
    2: [ // Tuesday
      { time: '6:45 – 7:00', startM: 405, endM: 420, title: 'Wake + Freshen', desc: 'Wake up, freshen up, light exercise / meditation' },
      { time: '7:00 – 8:00', startM: 420, endM: 480, title: 'DSA', desc: 'Daily problem solving + revision' },
      { time: '8:00 – 9:15', startM: 480, endM: 555, title: 'Breakfast + Get Ready', desc: 'Breakfast, get ready, leave for college' },
      { time: '9:15 – 9:40', startM: 555, endM: 580, title: 'Travel', desc: 'Commute to college' },
      { time: '9:40 – 4:20', startM: 580, endM: 980, title: 'College', desc: 'College (Classes & Labs)' },
      { time: '4:20 – 5:30', startM: 980, endM: 1050, title: 'Travel + Hostel + Snack', desc: 'Travel back, reach hostel, snack & decompress' },
      { time: '5:30 – 6:00', startM: 1050, endM: 1080, title: 'Decompression', desc: 'Real break / decompression (Relax)' },
      { time: '6:00 – 7:30', startM: 1080, endM: 1170, title: 'CampusUnstop', desc: 'Full-stack development (Features & Notifications)' },
      { time: '7:30 – 8:00', startM: 1170, endM: 1200, title: 'Dinner', desc: 'Dinner & evening recharge' },
      { time: '8:00 – 9:15', startM: 1200, endM: 1275, title: 'Academics', desc: 'College notes, assignments & exam prep' },
      { time: '9:15 – 9:30', startM: 1275, endM: 1290, title: 'Break', desc: 'Short breather & hydration' },
      { time: '9:30 – 10:15', startM: 1290, endM: 1335, title: 'DSA Review', desc: 'Review morning DSA problems + college revision' },
      { time: '10:15 – 10:30', startM: 1335, endM: 1350, title: 'Plan Tomorrow', desc: 'Review timetable & set 3 key priorities' },
      { time: '10:30 onwards', startM: 1350, endM: 1440, title: 'Wind Down + Sleep', desc: 'Protect recovery & consistency (7–8 hrs)' }
    ],
    3: [ // Wednesday
      { time: '6:45 – 7:00', startM: 405, endM: 420, title: 'Wake + Freshen', desc: 'Wake up, freshen up, light exercise / meditation' },
      { time: '7:00 – 8:00', startM: 420, endM: 480, title: 'DSA', desc: 'Daily problem solving + revision' },
      { time: '8:00 – 9:15', startM: 480, endM: 555, title: 'Breakfast + Get Ready', desc: 'Breakfast, get ready, leave for college' },
      { time: '9:15 – 9:40', startM: 555, endM: 580, title: 'Travel', desc: 'Commute to college' },
      { time: '9:40 – 4:20', startM: 580, endM: 980, title: 'College', desc: 'College (Classes & Labs)' },
      { time: '4:20 – 5:30', startM: 980, endM: 1050, title: 'Travel + Hostel + Snack', desc: 'Travel back, reach hostel, snack & decompress' },
      { time: '5:30 – 6:00', startM: 1050, endM: 1080, title: 'Decompression', desc: 'Real break / decompression (Relax)' },
      { time: '6:00 – 7:30', startM: 1080, endM: 1170, title: 'Bhoomitra-AI', desc: 'AI + IoT precision farming system, ESP32 & web dashboard' },
      { time: '7:30 – 8:00', startM: 1170, endM: 1200, title: 'Dinner', desc: 'Dinner & evening recharge' },
      { time: '8:00 – 9:15', startM: 1200, endM: 1275, title: 'Academics', desc: 'College notes, assignments & exam prep' },
      { time: '9:15 – 9:30', startM: 1275, endM: 1290, title: 'Break', desc: 'Short breather & hydration' },
      { time: '9:30 – 10:15', startM: 1290, endM: 1335, title: 'DSA Review', desc: 'Review morning DSA problems + college revision' },
      { time: '10:15 – 10:30', startM: 1335, endM: 1350, title: 'Plan Tomorrow', desc: 'Review timetable & set 3 key priorities' },
      { time: '10:30 onwards', startM: 1350, endM: 1440, title: 'Wind Down + Sleep', desc: 'Protect recovery & consistency (7–8 hrs)' }
    ],
    4: [ // Thursday
      { time: '6:45 – 7:00', startM: 405, endM: 420, title: 'Wake + Freshen', desc: 'Wake up, freshen up, light exercise / meditation' },
      { time: '7:00 – 8:00', startM: 420, endM: 480, title: 'DSA', desc: 'Daily problem solving + revision' },
      { time: '8:00 – 9:15', startM: 480, endM: 555, title: 'Breakfast + Get Ready', desc: 'Breakfast, get ready, leave for college' },
      { time: '9:15 – 9:40', startM: 555, endM: 580, title: 'Travel', desc: 'Commute to college' },
      { time: '9:40 – 4:20', startM: 580, endM: 980, title: 'College', desc: 'College (Classes & Labs)' },
      { time: '4:20 – 5:30', startM: 980, endM: 1050, title: 'Travel + Hostel + Snack', desc: 'Travel back, reach hostel, snack & decompress' },
      { time: '5:30 – 6:00', startM: 1050, endM: 1080, title: 'Decompression', desc: 'Real break / decompression (Relax)' },
      { time: '6:00 – 7:30', startM: 1080, endM: 1170, title: 'ShilpAI', desc: 'AI marketplace & smart cataloging for artisans (SIH26090)' },
      { time: '7:30 – 8:00', startM: 1170, endM: 1200, title: 'Dinner', desc: 'Dinner & evening recharge' },
      { time: '8:00 – 9:15', startM: 1200, endM: 1275, title: 'Academics', desc: 'College notes, assignments & exam prep' },
      { time: '9:15 – 9:30', startM: 1275, endM: 1290, title: 'Break', desc: 'Short breather & hydration' },
      { time: '9:30 – 10:15', startM: 1290, endM: 1335, title: 'DSA Review', desc: 'Review morning DSA problems + college revision' },
      { time: '10:15 – 10:30', startM: 1335, endM: 1350, title: 'Plan Tomorrow', desc: 'Review timetable & set 3 key priorities' },
      { time: '10:30 onwards', startM: 1350, endM: 1440, title: 'Wind Down + Sleep', desc: 'Protect recovery & consistency (7–8 hrs)' }
    ],
    5: [ // Friday
      { time: '6:45 – 7:00', startM: 405, endM: 420, title: 'Wake + Freshen', desc: 'Wake up, freshen up, light exercise / meditation' },
      { time: '7:00 – 8:00', startM: 420, endM: 480, title: 'DSA', desc: 'Daily problem solving + revision' },
      { time: '8:00 – 9:15', startM: 480, endM: 555, title: 'Breakfast + Get Ready', desc: 'Breakfast, get ready, leave for college' },
      { time: '9:15 – 9:40', startM: 555, endM: 580, title: 'Travel', desc: 'Commute to college' },
      { time: '9:40 – 4:20', startM: 580, endM: 980, title: 'College', desc: 'College (Classes & Labs)' },
      { time: '4:20 – 5:30', startM: 980, endM: 1050, title: 'Travel + Hostel + Snack', desc: 'Travel back, reach hostel, snack & decompress' },
      { time: '5:30 – 6:00', startM: 1050, endM: 1080, title: 'Decompression', desc: 'Real break / decompression (Relax)' },
      { time: '6:00 – 7:30', startM: 1080, endM: 1170, title: 'CampusUnstop / ShilpAI', desc: 'Catch-up block, polish & fix features' },
      { time: '7:30 – 8:00', startM: 1170, endM: 1200, title: 'Dinner', desc: 'Dinner & evening recharge' },
      { time: '8:00 – 9:15', startM: 1200, endM: 1275, title: 'Applications', desc: 'Applications + Resume review + LinkedIn outreach' },
      { time: '9:15 – 9:30', startM: 1275, endM: 1290, title: 'Break', desc: 'Short breather & hydration' },
      { time: '9:30 – 10:15', startM: 1290, endM: 1335, title: 'GitHub / Portfolio', desc: 'GitHub updates, portfolio refinements + Light DSA' },
      { time: '10:15 – 10:30', startM: 1335, endM: 1350, title: 'Plan Tomorrow', desc: 'Set Saturday weekend objectives' },
      { time: '10:30 onwards', startM: 1350, endM: 1440, title: 'Wind Down + Sleep', desc: 'Protect recovery & consistency (7–8 hrs)' }
    ],
    6: [ // Saturday
      { time: '6:45 – 7:00', startM: 405, endM: 420, title: 'Wake + Freshen', desc: 'Wake up, freshen up, light exercise / meditation' },
      { time: '7:00 – 8:00', startM: 420, endM: 510, title: 'DSA (1.5–2h)', desc: '2–3 DSA problems + conceptual depth' },
      { time: '8:00 – 9:15', startM: 510, endM: 580, title: 'Breakfast + Personal Time', desc: 'Unrushed morning meal & personal time' },
      { time: '9:40 – 4:20', startM: 580, endM: 980, title: 'Project Deep Work (2–3h)', desc: 'Weekend deep build: TBP-SIH26092 architecture' },
      { time: '4:20 – 5:30', startM: 980, endM: 1050, title: 'Break / Personal Time', desc: 'Recharge, outdoor walk or personal errands' },
      { time: '5:30 – 6:00', startM: 1050, endM: 1080, title: 'Lunch + Break', desc: 'Relaxation & mental break' },
      { time: '6:00 – 7:30', startM: 1080, endM: 1170, title: 'TBP-SIH26092', desc: 'Design and build properly (from planning stage)' },
      { time: '7:30 – 8:00', startM: 1170, endM: 1200, title: 'Dinner', desc: 'Dinner & rest' },
      { time: '8:00 – 9:15', startM: 1200, endM: 1275, title: 'Academics (1.5–2h)', desc: 'Focused study on complex college topics' },
      { time: '9:15 – 9:30', startM: 1275, endM: 1290, title: 'Break', desc: 'Short breather & hydration' },
      { time: '9:30 – 10:15', startM: 1290, endM: 1335, title: 'DSA / Contest (1h)', desc: 'Contest simulation or problem review' },
      { time: '10:15 – 10:30', startM: 1335, endM: 1350, title: 'Plan Tomorrow', desc: 'Set Sunday goals' },
      { time: '10:30 onwards', startM: 1350, endM: 1440, title: 'Wind Down + Sleep', desc: 'Protect recovery & consistency (7–8 hrs)' }
    ],
    0: [ // Sunday
      { time: '6:45 – 7:00', startM: 405, endM: 420, title: 'Wake + Freshen', desc: 'Wake up, freshen up, light exercise / meditation' },
      { time: '7:00 – 8:00', startM: 420, endM: 500, title: 'DSA (1–1.5h)', desc: '1–2 DSA problems + revision of weekly patterns' },
      { time: '8:00 – 9:15', startM: 500, endM: 580, title: 'Breakfast + Personal Time', desc: 'Relaxed breakfast & personal reflection' },
      { time: '9:40 – 4:20', startM: 580, endM: 980, title: 'Academic Revision (2–3h)', desc: 'Complete weekly syllabus revision & notes' },
      { time: '4:20 – 5:30', startM: 980, endM: 1050, title: 'Break / Personal Time', desc: 'Personal errands, friends & rest' },
      { time: '5:30 – 6:00', startM: 1050, endM: 1080, title: 'Lunch + Break', desc: 'Decompress & rest' },
      { time: '6:00 – 7:30', startM: 1080, endM: 1170, title: 'TBP-SIH26092', desc: 'Design / research & project architecture' },
      { time: '7:30 – 8:00', startM: 1170, endM: 1200, title: 'Dinner', desc: 'Dinner & evening relaxation' },
      { time: '8:00 – 9:15', startM: 1200, endM: 1275, title: 'Applications / Revision (1h)', desc: 'Weekly career check & subject consolidation' },
      { time: '9:15 – 9:30', startM: 1275, endM: 1290, title: 'Break', desc: 'Short breather' },
      { time: '9:30 – 10:15', startM: 1290, endM: 1335, title: 'Weekly Planning (20–30 min)', desc: 'Review targets, milestones & plan next week' },
      { time: '10:15 – 10:30', startM: 1335, endM: 1350, title: 'Plan Next Week', desc: 'Finalize schedule for Monday' },
      { time: '10:30 onwards', startM: 1350, endM: 1440, title: 'Wind Down + Sleep', desc: 'Protect recovery & consistency (7–8 hrs)' }
    ]
  };

  // =========================================================================
  // STATE MANAGEMENT
  // =========================================================================

  let activeDayIndex = new Date().getDay(); // 0-6
  let currentScheduleView = 'timeline'; // 'timeline' or 'table'

  const CHECKLIST_STORAGE_KEY = 'weekly_focus_daily_checklist_state';
  const TARGETS_STORAGE_KEY = 'weekly_focus_targets_state_v1';

  const CHECKLIST_ITEMS_COUNT = 7;

  // =========================================================================
  // INIT FUNCTION
  // =========================================================================

  document.addEventListener('DOMContentLoaded', () => {
    initLiveClock();
    initScheduleTabs();
    initScheduleViewToggle();
    renderDayTimeline(activeDayIndex);
    initDailyChecklist();
    initWeeklyTargets();
    initPWA();
  });

  // =========================================================================
  // LIVE CLOCK & ACTIVE BLOCK
  // =========================================================================

  function initLiveClock() {
    updateClockAndActiveBlock();
    setInterval(updateClockAndActiveBlock, 1000 * 30); // check every 30 seconds
  }

  function updateClockAndActiveBlock() {
    const now = new Date();
    const dayIndex = now.getDay();
    const currentM = now.getHours() * 60 + now.getMinutes();

    // Format Date & Time
    const dateStr = now.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
    const timeStr = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    const liveDateEl = document.getElementById('liveDate');
    const liveTimeEl = document.getElementById('liveTime');
    const activeBlockPill = document.getElementById('activeBlockPill');

    if (liveDateEl) liveDateEl.textContent = dateStr;
    if (liveTimeEl) liveTimeEl.textContent = timeStr;

    // Detect active block for today
    const todayBlocks = SCHEDULE_DATA[dayIndex] || [];
    let currentBlock = null;

    for (const block of todayBlocks) {
      if (block.startM <= currentM && currentM < block.endM) {
        currentBlock = block;
        break;
      }
    }

    if (activeBlockPill) {
      if (currentBlock) {
        activeBlockPill.innerHTML = `<span>Active: <strong>${currentBlock.title}</strong></span>`;
        activeBlockPill.classList.remove('hidden');
      } else if (currentM >= 1350 || currentM < 405) {
        activeBlockPill.innerHTML = `<span>Rest: <strong>Sleep & Recovery</strong></span>`;
        activeBlockPill.classList.remove('hidden');
      } else {
        activeBlockPill.classList.add('hidden');
      }
    }

    // If currently viewing today in timeline, re-highlight active block
    if (activeDayIndex === dayIndex && currentScheduleView === 'timeline') {
      highlightActiveTimelineBlock(currentM);
    }
  }

  // =========================================================================
  // SCHEDULE VIEW & TABS
  // =========================================================================

  function initScheduleTabs() {
    const tabsContainer = document.getElementById('dayTabs');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = '';
    const todayIndex = new Date().getDay();

    // Reorder tabs starting from Monday (1, 2, 3, 4, 5, 6, 0)
    const order = [1, 2, 3, 4, 5, 6, 0];

    order.forEach((dayIdx) => {
      const isToday = dayIdx === todayIndex;
      const isSelected = dayIdx === activeDayIndex;

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `day-tab ${isSelected ? 'active' : ''}`;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      btn.dataset.day = dayIdx;

      let label = SHORT_DAYS[dayIdx];
      if (isToday) {
        btn.innerHTML = `${label} <span class="today-indicator" title="Today"></span>`;
      } else {
        btn.textContent = label;
      }

      btn.addEventListener('click', () => {
        document.querySelectorAll('.day-tab').forEach((t) => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        activeDayIndex = dayIdx;
        renderDayTimeline(activeDayIndex);
      });

      tabsContainer.appendChild(btn);
    });
  }

  function initScheduleViewToggle() {
    const btnTimeline = document.getElementById('btnViewTimeline');
    const btnTable = document.getElementById('btnViewTable');
    const timelineView = document.getElementById('timelineView');
    const tableView = document.getElementById('tableView');

    if (!btnTimeline || !btnTable) return;

    btnTimeline.addEventListener('click', () => {
      currentScheduleView = 'timeline';
      btnTimeline.classList.add('active');
      btnTable.classList.remove('active');
      timelineView.classList.remove('hidden');
      tableView.classList.add('hidden');
      renderDayTimeline(activeDayIndex);
    });

    btnTable.addEventListener('click', () => {
      currentScheduleView = 'table';
      btnTable.classList.add('active');
      btnTimeline.classList.remove('active');
      tableView.classList.remove('hidden');
      timelineView.classList.add('hidden');
    });

    // Mobile screen check: default to timeline on small screens
    if (window.innerWidth < 768) {
      currentScheduleView = 'timeline';
      btnTimeline.classList.add('active');
      btnTable.classList.remove('active');
      timelineView.classList.remove('hidden');
      tableView.classList.add('hidden');
    }
  }

  function renderDayTimeline(dayIdx) {
    const container = document.getElementById('timelineContainer');
    const dayLabel = document.getElementById('timelineDayLabel');
    if (!container) return;

    const todayIndex = new Date().getDay();
    const isToday = dayIdx === todayIndex;

    if (dayLabel) {
      dayLabel.textContent = `${DAYS[dayIdx]} ${isToday ? '(Today)' : ''}`;
    }

    const blocks = SCHEDULE_DATA[dayIdx] || [];
    const now = new Date();
    const currentM = now.getHours() * 60 + now.getMinutes();

    let html = '';
    blocks.forEach((block) => {
      const isActive = isToday && (block.startM <= currentM && currentM < block.endM);
      html += `
        <article class="timeline-item ${isActive ? 'active-block' : ''}" data-start="${block.startM}" data-end="${block.endM}">
          <div class="timeline-time-col">
            <span class="timeline-time">${block.time}</span>
          </div>
          <div class="timeline-content">
            <h4 class="timeline-title">${escapeHtml(block.title)}</h4>
            <p class="timeline-desc">${escapeHtml(block.desc)}</p>
          </div>
        </article>
      `;
    });

    container.innerHTML = html;
  }

  function highlightActiveTimelineBlock(currentM) {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item) => {
      const start = parseInt(item.dataset.start, 10);
      const end = parseInt(item.dataset.end, 10);
      if (start <= currentM && currentM < end) {
        item.classList.add('active-block');
      } else {
        item.classList.remove('active-block');
      }
    });
  }

  // =========================================================================
  // DAILY CHECKLIST (LocalStorage with logical new day reset)
  // =========================================================================

  function initDailyChecklist() {
    const checklistItems = document.querySelectorAll('.checklist-item');
    const progressBar = document.getElementById('checklistProgressFill');
    const progressText = document.getElementById('checklistProgressText');
    const celebrationEl = document.getElementById('checklistCelebration');
    const resetBtn = document.getElementById('btnResetChecklist');

    if (!checklistItems.length) return;

    const todayDateKey = getTodayDateString();

    // Load persisted state
    let state = loadChecklistState();

    // Check if new day
    if (!state || state.date !== todayDateKey) {
      // New day detected: reset checkboxes cleanly
      state = {
        date: todayDateKey,
        checked: new Array(CHECKLIST_ITEMS_COUNT).fill(false)
      };
      saveChecklistState(state);
    }

    // Apply state to DOM
    checklistItems.forEach((item, index) => {
      const checkbox = item.querySelector('.checklist-checkbox');
      const isChecked = !!state.checked[index];

      checkbox.checked = isChecked;
      if (isChecked) {
        item.classList.add('checked');
      } else {
        item.classList.remove('checked');
      }

      // Toggle on card click or checkbox change
      item.addEventListener('click', (e) => {
        if (e.target !== checkbox) {
          checkbox.checked = !checkbox.checked;
        }
        handleChecklistChange();
      });

      checkbox.addEventListener('change', () => {
        handleChecklistChange();
      });
    });

    updateChecklistUI();

    function handleChecklistChange() {
      const checkedArr = [];
      checklistItems.forEach((item, idx) => {
        const cb = item.querySelector('.checklist-checkbox');
        const checked = cb.checked;
        checkedArr.push(checked);
        if (checked) {
          item.classList.add('checked');
        } else {
          item.classList.remove('checked');
        }
      });

      state = {
        date: todayDateKey,
        checked: checkedArr
      };
      saveChecklistState(state);
      updateChecklistUI();
    }

    function updateChecklistUI() {
      const completedCount = state.checked.filter(Boolean).length;
      const percent = Math.round((completedCount / CHECKLIST_ITEMS_COUNT) * 100);

      if (progressBar) {
        progressBar.style.width = `${percent}%`;
      }
      if (progressText) {
        progressText.textContent = `${completedCount} of ${CHECKLIST_ITEMS_COUNT} completed (${percent}%)`;
      }

      if (celebrationEl) {
        if (completedCount === CHECKLIST_ITEMS_COUNT) {
          celebrationEl.style.display = 'block';
          celebrationEl.textContent = '🔥 All 7 blocks completed! Consistency creates results.';
        } else {
          celebrationEl.style.display = 'none';
        }
      }
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Reset today\'s checklist progress?')) {
          state = {
            date: todayDateKey,
            checked: new Array(CHECKLIST_ITEMS_COUNT).fill(false)
          };
          saveChecklistState(state);
          checklistItems.forEach((item) => {
            const cb = item.querySelector('.checklist-checkbox');
            cb.checked = false;
            item.classList.remove('checked');
          });
          updateChecklistUI();
        }
      });
    }
  }

  function getTodayDateString() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function loadChecklistState() {
    try {
      const raw = localStorage.getItem(CHECKLIST_STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.warn('Could not read checklist from localStorage', e);
      return null;
    }
  }

  function saveChecklistState(state) {
    try {
      localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Could not save checklist to localStorage', e);
    }
  }

  // =========================================================================
  // WEEKLY TARGETS (Interactive hours tracker with localStorage)
  // =========================================================================

  function initWeeklyTargets() {
    const currentWeekKey = getWeekIdentifier();
    let targetsData = loadTargetsState();

    // Check if new week
    if (!targetsData || targetsData.week !== currentWeekKey) {
      targetsData = {
        week: currentWeekKey,
        hours: {
          academics: 0,
          dsa: 0,
          projects: 0,
          applications: 0,
          github: 0
        }
      };
      saveTargetsState(targetsData);
    }

    const cards = document.querySelectorAll('.target-card[data-key]');
    cards.forEach((card) => {
      const key = card.dataset.key;
      const targetMin = parseFloat(card.dataset.min);
      const targetMax = parseFloat(card.dataset.max);

      const loggedEl = card.querySelector('.logged-value');
      const btnAdd = card.querySelector('.btn-add-hour');
      const btnSub = card.querySelector('.btn-sub-hour');

      function updateCard() {
        const logged = targetsData.hours[key] || 0;
        if (loggedEl) {
          if (logged > 0) {
            loggedEl.innerHTML = `<strong>${logged}h</strong> logged`;
          } else {
            loggedEl.innerHTML = `Target: <strong>${targetMin}–${targetMax}h</strong>`;
          }
        }
      }

      if (btnAdd) {
        btnAdd.addEventListener('click', () => {
          targetsData.hours[key] = (targetsData.hours[key] || 0) + 1;
          saveTargetsState(targetsData);
          updateCard();
        });
      }

      if (btnSub) {
        btnSub.addEventListener('click', () => {
          if (targetsData.hours[key] > 0) {
            targetsData.hours[key] = Math.max(0, targetsData.hours[key] - 1);
            saveTargetsState(targetsData);
            updateCard();
          }
        });
      }

      updateCard();
    });
  }

  function getWeekIdentifier() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    const yearStart = new Date(d.getFullYear(), 0, 1);
    const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return `${d.getFullYear()}-W${weekNo}`;
  }

  function loadTargetsState() {
    try {
      const raw = localStorage.getItem(TARGETS_STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveTargetsState(data) {
    try {
      localStorage.setItem(TARGETS_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Failed to save targets', e);
    }
  }

  // =========================================================================
  // PWA REGISTRATION & INSTALL PROMPT
  // =========================================================================

  let deferredInstallPrompt = null;

  function initPWA() {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('./sw.js')
          .then((reg) => {
            console.log('Weekly Focus Service Worker registered: ', reg.scope);
          })
          .catch((err) => {
            console.warn('Weekly Focus SW registration failed: ', err);
          });
      });
    }

    // Handle beforeinstallprompt for Android Chrome & Desktop PWA
    const installBtn = document.getElementById('btnInstallApp');

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredInstallPrompt = e;
      if (installBtn) {
        installBtn.style.display = 'inline-flex';
      }
    });

    if (installBtn) {
      installBtn.addEventListener('click', async () => {
        if (!deferredInstallPrompt) return;

        deferredInstallPrompt.prompt();
        const { outcome } = await deferredInstallPrompt.userChoice;
        console.log(`User response to install: ${outcome}`);

        deferredInstallPrompt = null;
        installBtn.style.display = 'none';
      });
    }

    window.addEventListener('appinstalled', () => {
      console.log('Weekly Focus PWA installed successfully');
      if (installBtn) installBtn.style.display = 'none';
      const statusEl = document.getElementById('footerPwaStatus');
      if (statusEl) {
        statusEl.innerHTML = '⚡ Installed PWA Standalone Mode';
      }
    });

    // Detect if already running in standalone mode
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
      if (installBtn) installBtn.style.display = 'none';
      const statusEl = document.getElementById('footerPwaStatus');
      if (statusEl) {
        statusEl.innerHTML = '⚡ Standalone App Mode Active';
      }
    }
  }

  // Utility to escape HTML strings
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
})();
