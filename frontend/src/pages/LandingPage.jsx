import React, { useEffect, useState } from 'react';
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle,
  ChevronRight,
  Clock,
  Database,
  Factory,
  FileSpreadsheet,
  Layers3,
  RadioTower,
  Route,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import DemoModal from '../components/DemoModal';
import {
  debriefPreview,
  heroSignals,
  proofPoints,
  teamBriefs,
  valueProps,
  workflowSteps,
} from '../data/mock';

const statusStyles = {
  Blocked: 'border-red-500 bg-red-50 text-red-700',
  Shortage: 'border-amber-500 bg-amber-50 text-amber-800',
  Decision: 'border-emerald-500 bg-emerald-50 text-emerald-800',
};

const sectionLabelClass =
  'inline-flex items-center rounded-full border border-stone-300 bg-stone-100 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-stone-700';

const LandingPage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [modalType, setModalType] = useState('demo');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (type) => {
    setModalType(type);
    setIsDemoModalOpen(true);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f4efe4] text-stone-950">
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'border-b border-stone-300/80 bg-[#f4efe4]/95 shadow-sm backdrop-blur'
            : 'border-b border-transparent bg-[#f4efe4]/80 backdrop-blur'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3"
          >
            <img
              src="/images/corvus-logo.png"
              alt="Corvus Debrief logo"
              className="h-10 w-10 object-contain"
            />
            <div className="text-left">
              <div className="text-lg font-black leading-none tracking-[-0.04em] text-stone-950">
                Corvus MFG
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                Debrief
              </div>
            </div>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollToSection('problem')}
              className="text-sm font-bold text-stone-600 transition-colors hover:text-stone-950"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection('workflow')}
              className="text-sm font-bold text-stone-600 transition-colors hover:text-stone-950"
            >
              Workflow
            </button>
            <button
              onClick={() => scrollToSection('teams')}
              className="text-sm font-bold text-stone-600 transition-colors hover:text-stone-950"
            >
              Teams
            </button>
            <Button
              onClick={() => openModal('demo')}
              className="rounded-full bg-stone-950 px-5 text-white hover:bg-stone-800"
            >
              See the 5-minute debrief
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative px-5 pb-24 pt-32 md:pb-32 md:pt-40 lg:px-8">
        <div className="absolute left-1/2 top-20 h-[620px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#f97316_0%,rgba(249,115,22,0.10)_34%,rgba(244,239,228,0)_70%)] opacity-25" />
        <div className="absolute right-0 top-0 hidden h-full w-1/3 bg-[linear-gradient(90deg,rgba(244,239,228,0),rgba(120,53,15,0.10))] lg:block" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-stone-300 bg-white/60 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-stone-700 shadow-sm">
              <RadioTower className="h-4 w-4 text-orange-700" />
              Early design partner access
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.07em] text-stone-950 md:text-7xl lg:text-8xl">
              Replace raw manufacturing data chaos with a daily ops debrief.
            </h1>

            <p className="mt-8 max-w-3xl text-xl font-medium leading-8 text-stone-700 md:text-2xl md:leading-9">
              Corvus Debrief turns messy MES, ERP, QMS, and spreadsheet exports into
              team-specific intelligence, so ops leaders make decisions instead of
              interpreting data.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={() => openModal('demo')}
                className="group rounded-full bg-orange-700 px-8 py-7 text-base font-black text-white shadow-xl shadow-orange-900/15 hover:bg-orange-800"
              >
                See the 5-minute debrief
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={() => openModal('report')}
                variant="outline"
                className="rounded-full border-2 border-stone-900 bg-transparent px-8 py-7 text-base font-black text-stone-950 hover:bg-stone-950 hover:text-white"
              >
                Try it with a messy CSV
              </Button>
            </div>

            <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
              {heroSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-2xl border border-stone-300 bg-white/70 p-4 shadow-sm"
                >
                  <div className="text-xs font-black uppercase tracking-[0.18em] text-stone-500">
                    {signal.label}
                  </div>
                  <div className="mt-2 text-sm font-black leading-5 text-stone-950">
                    {signal.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rotate-2 rounded-[2rem] bg-stone-950" />
            <div className="relative rounded-[2rem] border border-stone-800 bg-[#17130f] p-5 shadow-2xl">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">
                    Daily Debrief
                  </div>
                  <div className="mt-1 text-2xl font-black tracking-[-0.04em] text-white">
                    Morning Standup Brief
                  </div>
                </div>
                <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">
                  4m 38s
                </div>
              </div>

              <div className="space-y-3">
                {debriefPreview.map((item) => (
                  <div
                    key={item.headline}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-stone-950">
                        {item.team}
                      </span>
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-black ${
                          statusStyles[item.status]
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <div className="text-lg font-black leading-6 tracking-[-0.03em] text-white">
                      {item.headline}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-stone-300">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-orange-300/20 bg-orange-300/10 p-4">
                <div className="text-xs font-black uppercase tracking-[0.22em] text-orange-200">
                  Suggested decision
                </div>
                <p className="mt-2 text-sm font-semibold leading-6 text-orange-50">
                  Move QA signoff to the top of standup, then decide whether to expedite A-2847
                  or resequence Line 3 before second shift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="border-y border-stone-300 bg-stone-950 px-5 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-orange-200">
              The real problem
            </span>
            <h2 className="mt-8 text-4xl font-black leading-[0.96] tracking-[-0.06em] text-white md:text-6xl">
              Your factory already has the signals. They are just buried in exports.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                icon: FileSpreadsheet,
                title: 'Headers change every export',
                text: 'work_order, WorkOrder, WO#, job number. Same meaning, different mess.',
              },
              {
                icon: Clock,
                title: 'Standups start with archaeology',
                text: 'Leaders spend the meeting reconstructing what happened instead of deciding what to do.',
              },
              {
                icon: AlertTriangle,
                title: 'Risk hides in notes',
                text: 'The important signal is often in a comment, partial quantity, status mismatch, or missing field.',
              },
              {
                icon: Users,
                title: 'Every team needs a different cut',
                text: 'Ops, quality, materials, and schedule do not need the same report. They need the same truth translated.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-white/10 bg-white/[0.06] p-6">
                  <Icon className="h-7 w-7 text-orange-300" />
                  <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-stone-300">{item.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="workflow" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className={sectionLabelClass}>How it works</span>
            <h2 className="mt-7 text-4xl font-black leading-[0.98] tracking-[-0.06em] text-stone-950 md:text-6xl">
              The demo path is intentionally simple.
            </h2>
            <p className="mt-5 text-lg font-medium leading-8 text-stone-700">
              No integration theater. Drop the messy file, map the schema, reason across
              signals, generate the debrief, walk the findings.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {workflowSteps.map((step) => (
              <Card key={step.step} className="relative overflow-hidden border-stone-300 bg-white/70 p-6">
                <div className="absolute right-4 top-4 text-5xl font-black tracking-[-0.08em] text-stone-200">
                  {step.step}
                </div>
                <div className="relative">
                  <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-950 text-white">
                    <Route className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-black leading-6 tracking-[-0.04em] text-stone-950">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-stone-600">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teams" className="bg-[#e6dccb] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <span className={sectionLabelClass}>Team-specific intelligence</span>
              <h2 className="mt-7 text-4xl font-black leading-[0.98] tracking-[-0.06em] text-stone-950 md:text-6xl">
                One source of truth. Four different debriefs.
              </h2>
            </div>
            <p className="text-lg font-medium leading-8 text-stone-700">
              Corvus Debrief is not another dashboard tab. It is the meeting-ready translation
              layer between raw manufacturing data and the people who need to act on it.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {teamBriefs.map((brief) => (
              <Card key={brief.team} className="border-stone-300 bg-[#f8f3ea] p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-700 text-white">
                  <Factory className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-black tracking-[-0.04em] text-stone-950">
                  {brief.team}
                </h3>
                <p className="mt-3 text-sm font-bold leading-6 text-stone-700">{brief.line}</p>
                <div className="mt-5 rounded-2xl border border-stone-300 bg-white/70 p-4">
                  <div className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-stone-500">
                    Example
                  </div>
                  <p className="text-sm leading-6 text-stone-700">{brief.example}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className={sectionLabelClass}>What changes</span>
            <h2 className="mt-7 text-4xl font-black leading-[0.98] tracking-[-0.06em] text-stone-950 md:text-6xl">
              The meeting starts where the spreadsheet usually ends.
            </h2>
            <div className="mt-8 space-y-4">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-700" />
                  <span className="text-base font-bold leading-7 text-stone-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-300 bg-white p-4 shadow-2xl shadow-stone-900/10">
            <div className="rounded-[1.5rem] bg-stone-950 p-5 text-white">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.22em] text-stone-400">
                    Before Corvus
                  </div>
                  <div className="mt-1 text-lg font-black text-white">Raw export fragment</div>
                </div>
                <Database className="h-6 w-6 text-orange-300" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                {[
                  ['WO#', 'stat', 'qty', 'note'],
                  ['4521', 'WIP', '26', 'QA hold - no disposition'],
                  ['WO-4532', 'in prog', '', 'Line 3 down 3.5h'],
                  ['4498', 'DONE?', '14', 'missing A-2847, partial'],
                ].map((row, index) => (
                  <div
                    key={row.join('-')}
                    className={`grid grid-cols-4 gap-2 px-3 py-3 text-xs ${
                      index === 0 ? 'bg-white/10 font-black text-orange-200' : 'border-t border-white/10 text-stone-300'
                    }`}
                  >
                    {row.map((cell) => (
                      <span key={cell || 'blank'} className="truncate font-mono">
                        {cell || '--'}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.22em] text-stone-500">
                    After Corvus
                  </div>
                  <div className="mt-1 text-2xl font-black tracking-[-0.04em] text-stone-950">
                    Decision-ready debrief
                  </div>
                </div>
                <ShieldCheck className="h-7 w-7 text-emerald-700" />
              </div>
              <div className="space-y-3">
                {[
                  'QA disposition blocks WO-4521 and should be first agenda item.',
                  'Line 3 downtime exposes WO-4532 delivery risk if not cleared before second shift.',
                  'Part A-2847 shortage creates a materials decision: expedite or resequence.',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <p className="text-sm font-bold leading-6 text-stone-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-300 bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className={sectionLabelClass}>Why Corvus Debrief</span>
            <h2 className="mt-7 text-4xl font-black leading-[0.98] tracking-[-0.06em] text-stone-950 md:text-6xl">
              Built for manufacturing ops leaders who are tired of interpreting exports.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {valueProps.map((prop, index) => {
              const icons = [Layers3, Users, FileSpreadsheet, Factory];
              const Icon = icons[index] || Layers3;
              return (
                <Card key={prop.title} className="group border-stone-300 bg-[#f8f3ea] p-7 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <Icon className="h-8 w-8 text-orange-700" />
                  <h3 className="mt-6 text-2xl font-black tracking-[-0.04em] text-stone-950">
                    {prop.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-stone-700">{prop.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-stone-950 p-8 text-white shadow-2xl shadow-stone-900/20 md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-orange-200">
                <Factory className="h-4 w-4" />
                Design partners
              </div>
              <h2 className="mt-7 text-4xl font-black leading-[0.96] tracking-[-0.06em] text-white md:text-6xl">
                Bring the messiest export you have.
              </h2>
              <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-stone-300">
                If Corvus can turn it into a useful debrief in under 5 minutes, we have
                something worth talking about.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button
                onClick={() => openModal('demo')}
                className="group rounded-full bg-orange-700 px-8 py-7 text-base font-black text-white hover:bg-orange-800"
              >
                See the 5-minute debrief
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
              <Button
                onClick={() => openModal('report')}
                variant="outline"
                className="rounded-full border-white/30 bg-transparent px-8 py-7 text-base font-black text-white hover:bg-white hover:text-stone-950"
              >
                Try a messy CSV
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-300 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <img
              src="/images/corvus-logo.png"
              alt="Corvus Debrief logo"
              className="h-8 w-8 object-contain"
            />
            <div>
              <div className="text-lg font-black leading-none tracking-[-0.04em] text-stone-950">
                Corvus Debrief
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-stone-500">
                Corvus MFG
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-sm font-bold text-stone-600">
            <button onClick={() => scrollToSection('problem')} className="hover:text-stone-950">
              Problem
            </button>
            <button onClick={() => scrollToSection('workflow')} className="hover:text-stone-950">
              Workflow
            </button>
            <button onClick={() => scrollToSection('teams')} className="hover:text-stone-950">
              Teams
            </button>
          </div>
          <div className="text-sm font-bold text-stone-500">© 2026 Corvus MFG. All rights reserved.</div>
        </div>
      </footer>

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        type={modalType}
      />
    </div>
  );
};

export default LandingPage;
