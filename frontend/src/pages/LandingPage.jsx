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
  Sparkles,
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

const rawRows = [
  ['WO#', 'stat', 'qty', 'note'],
  ['4521', 'WIP', '26', 'QA hold - no disposition'],
  ['4532', 'in prog', '', 'Line 3 down 3.5h'],
  ['4498', 'DONE?', '14', 'missing A-2847'],
];

const schemaMappings = [
  ['WO#', 'work_order_id'],
  ['stat', 'status'],
  ['note', 'risk_signal'],
];

const statusStyles = {
  Blocked: 'border-rose-200 bg-rose-50 text-rose-700',
  Shortage: 'border-amber-200 bg-amber-50 text-amber-700',
  Decision: 'border-emerald-200 bg-emerald-50 text-emerald-700',
};

const sectionLabelClass =
  'inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-sky-700 shadow-sm';

const panelClass =
  'border border-slate-200 bg-white shadow-xl shadow-sky-100/70';

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
    <div className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.10),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,251,255,0.18)_0%,rgba(247,251,255,0.88)_70%,#f7fbff_100%)]" />
      </div>

      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'border-b border-sky-200 bg-white/90 shadow-sm backdrop-blur-xl'
            : 'border-b border-transparent bg-white/75 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-sky-200 blur-lg opacity-35" />
              <img
                src="/images/corvus-logo.png"
                alt="Corvus Debrief logo"
                className="relative h-10 w-10 rounded-full object-contain ring-1 ring-cyan-200/20"
              />
            </div>
            <div className="text-left">
              <div className="text-lg font-black leading-none tracking-[-0.04em] text-slate-950">
                Corvus MFG
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600/80">
                Debrief
              </div>
            </div>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {[
              ['Problem', 'problem'],
              ['Workflow', 'workflow'],
              ['Teams', 'teams'],
            ].map(([label, target]) => (
              <button
                key={target}
                onClick={() => scrollToSection(target)}
                className="text-sm font-bold text-slate-600 transition-colors hover:text-sky-600"
              >
                {label}
              </button>
            ))}
            <Button
              onClick={() => openModal('demo')}
              className="rounded-full border border-sky-700 bg-sky-700 px-5 text-white shadow-sm hover:bg-sky-800"
            >
              Book a 5-minute debrief
            </Button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="relative px-5 pb-24 pt-32 md:pb-32 md:pt-40 lg:px-8">
          <div className="absolute left-1/2 top-28 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-200/45 blur-[130px]" />
          <div className="absolute right-[-120px] top-28 hidden h-[420px] w-[420px] rounded-full bg-blue-200/35 blur-[120px] lg:block" />

          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-sky-700 shadow-sm backdrop-blur">
                <RadioTower className="h-4 w-4 text-sky-600" />
                Early design partner access
              </div>

              <h1 className="max-w-5xl text-5xl font-black leading-[0.96] tracking-[-0.055em] text-slate-950 md:text-7xl lg:text-8xl">
                Replace raw manufacturing data chaos with a daily ops debrief.
              </h1>

              <p className="mt-8 max-w-3xl text-xl font-medium leading-8 text-slate-600 md:text-2xl md:leading-9">
                Corvus Debrief turns messy MES, ERP, QMS, and spreadsheet exports into
                team-specific intelligence, so ops leaders make decisions instead of
                interpreting data.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  onClick={() => openModal('demo')}
                  className="group rounded-full bg-sky-700 px-8 py-7 text-base font-black text-white shadow-lg shadow-sky-200/60 hover:bg-sky-800"
                >
                  Book a 5-minute debrief
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  onClick={() => scrollToSection('workflow')}
                  variant="outline"
                  className="rounded-full border-2 border-sky-200 bg-white px-8 py-7 text-base font-black text-sky-800 hover:border-sky-700 hover:bg-sky-50 hover:text-sky-900"
                >
                  See how it works
                </Button>
              </div>

              <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
                {heroSignals.map((signal) => (
                  <div key={signal.label} className={`rounded-2xl p-4 ${panelClass}`}>
                    <div className="text-xs font-black uppercase tracking-[0.18em] text-sky-600/70">
                      {signal.label}
                    </div>
                    <div className="mt-2 text-sm font-black leading-5 text-slate-950">
                      {signal.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rotate-1 rounded-[2rem] bg-gradient-to-br from-sky-100 via-blue-50 to-transparent" />
              <div className="corvus-float relative overflow-hidden rounded-[2rem] border border-sky-200 bg-white/90 p-5 shadow-2xl shadow-sky-100 backdrop-blur-xl">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
                <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <div className="text-xs font-black uppercase tracking-[0.22em] text-sky-600">
                      Product motion
                    </div>
                    <div className="mt-1 text-2xl font-black tracking-[-0.04em] text-slate-950">
                      From export to debrief
                    </div>
                  </div>
                  <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">
                    4m 38s
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-950 p-4 text-white">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-sky-200">
                        <FileSpreadsheet className="h-4 w-4" />
                        messy_export.csv
                      </div>
                      <span className="rounded-full bg-rose-400/10 px-2.5 py-1 text-xs font-black text-rose-200">
                        raw
                      </span>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-white/10">
                      {rawRows.map((row, index) => (
                        <div
                          key={row.join('-')}
                          className={`grid grid-cols-4 gap-2 px-3 py-2 text-[11px] ${
                            index === 0
                              ? 'bg-sky-400/10 font-black text-sky-100'
                              : 'border-t border-white/10 text-slate-300'
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

                  <div className="relative rounded-2xl border border-sky-200 bg-sky-50 p-4">
                    <div className="absolute left-8 top-[-18px] h-8 w-px bg-sky-300" />
                    <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-sky-700">
                      <Database className="h-4 w-4" />
                      schema mapped
                    </div>
                    <div className="grid gap-2">
                      {schemaMappings.map(([from, to]) => (
                        <div
                          key={from}
                          className="flex items-center justify-between rounded-xl border border-sky-100 bg-white px-3 py-2 text-sm"
                        >
                          <span className="font-mono font-bold text-slate-500">{from}</span>
                          <span className="h-px flex-1 mx-3 bg-sky-200" />
                          <span className="font-black text-sky-800">{to}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative rounded-2xl border border-sky-200 bg-white p-4">
                    <div className="absolute left-8 top-[-18px] h-8 w-px bg-sky-300" />
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-sky-700">
                        <Sparkles className="h-4 w-4" />
                        ops debrief
                      </div>
                      <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-black text-emerald-700">
                        decision-ready
                      </span>
                    </div>
                    <div className="space-y-2">
                      {debriefPreview.slice(0, 2).map((item) => (
                        <div key={item.headline} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[11px] font-black text-sky-800">
                              {item.team}
                            </span>
                            <span className={`rounded-full border px-2.5 py-1 text-[11px] font-black ${statusStyles[item.status]}`}>
                              {item.status}
                            </span>
                          </div>
                          <div className="text-sm font-black leading-5 text-slate-950">
                            {item.headline}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="border-y border-sky-100 bg-white px-5 py-24 text-slate-950 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <span className={sectionLabelClass}>The real problem</span>
              <h2 className="mt-8 text-4xl font-black leading-[0.96] tracking-[-0.06em] text-slate-950 md:text-6xl">
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
                  text: 'Ops, quality, materials, and schedule need the same truth translated different ways.',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className={`p-6 ${panelClass}`}>
                    <Icon className="h-7 w-7 text-sky-600" />
                    <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
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
              <h2 className="mt-7 text-4xl font-black leading-[0.98] tracking-[-0.06em] text-slate-950 md:text-6xl">
                The demo path is intentionally simple.
              </h2>
              <p className="mt-5 text-lg font-medium leading-8 text-slate-600">
                No integration theater. Drop the messy file, map the schema, reason across
                signals, generate the debrief, walk the findings.
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-5">
              {workflowSteps.map((step) => (
                <Card key={step.step} className={`relative overflow-hidden p-6 ${panelClass}`}>
                  <div className="absolute right-4 top-4 text-5xl font-black tracking-[-0.08em] text-sky-600/12">
                    {step.step}
                  </div>
                  <div className="relative">
                    <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-700 text-white shadow-sm">
                      <Route className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-black leading-6 tracking-[-0.04em] text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-slate-600">{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="teams" className="bg-white px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <span className={sectionLabelClass}>Team-specific intelligence</span>
                <h2 className="mt-7 text-4xl font-black leading-[0.98] tracking-[-0.06em] text-slate-950 md:text-6xl">
                  One source of truth. Four different debriefs.
                </h2>
              </div>
              <p className="text-lg font-medium leading-8 text-slate-600">
                Corvus Debrief is not another dashboard tab. It is the meeting-ready translation
                layer between raw manufacturing data and the people who need to act on it.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {teamBriefs.map((brief) => (
                <Card key={brief.team} className={`p-6 ${panelClass}`}>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-700 text-white shadow-sm">
                    <Factory className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-black tracking-[-0.04em] text-slate-950">
                    {brief.team}
                  </h3>
                  <p className="mt-3 text-sm font-bold leading-6 text-sky-700">{brief.line}</p>
                  <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50 p-4">
                    <div className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-sky-600/70">
                      Example
                    </div>
                    <p className="text-sm leading-6 text-slate-600">{brief.example}</p>
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
              <h2 className="mt-7 text-4xl font-black leading-[0.98] tracking-[-0.06em] text-slate-950 md:text-6xl">
                The meeting starts where the spreadsheet usually ends.
              </h2>
              <div className="mt-8 space-y-4">
                {proofPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-sky-600" />
                    <span className="text-base font-bold leading-7 text-slate-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`rounded-[2rem] p-4 ${panelClass}`}>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-5 text-white">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                      Before Corvus
                    </div>
                    <div className="mt-1 text-lg font-black text-white">Raw export fragment</div>
                  </div>
                  <Database className="h-6 w-6 text-sky-300" />
                </div>
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  {[
                    ['WO#', 'stat', 'qty', 'note'],
                    ['4521', 'WIP', '26', 'QA hold - no disposition'],
                    ['WO-4532', 'in prog', '', 'Line 3 down 3.5h'],
                    ['4498', 'DONE?', '14', 'missing A-2847, partial'],
                  ].map((row, index) => (
                    <div
                      key={row.join('-')}
                      className={`grid grid-cols-4 gap-2 px-3 py-3 text-xs ${
                        index === 0 ? 'bg-sky-400/10 font-black text-sky-200' : 'border-t border-slate-800 text-slate-300'
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
                    <div className="text-xs font-black uppercase tracking-[0.22em] text-sky-600/70">
                      After Corvus
                    </div>
                    <div className="mt-1 text-2xl font-black tracking-[-0.04em] text-slate-950">
                      Decision-ready debrief
                    </div>
                  </div>
                  <ShieldCheck className="h-7 w-7 text-sky-600" />
                </div>
                <div className="space-y-3">
                  {[
                    'QA disposition blocks WO-4521 and should be first agenda item.',
                    'Line 3 downtime exposes WO-4532 delivery risk if not cleared before second shift.',
                    'Part A-2847 shortage creates a materials decision: expedite or resequence.',
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
                      <p className="text-sm font-bold leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-sky-100 bg-white px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <span className={sectionLabelClass}>Why Corvus Debrief</span>
              <h2 className="mt-7 text-4xl font-black leading-[0.98] tracking-[-0.06em] text-slate-950 md:text-6xl">
                Built for manufacturing ops leaders who are tired of interpreting exports.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {valueProps.map((prop, index) => {
                const icons = [Layers3, Users, FileSpreadsheet, Factory];
                const Icon = icons[index] || Layers3;
                return (
                  <Card key={prop.title} className={`group p-7 transition-all hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg ${panelClass}`}>
                    <Icon className="h-8 w-8 text-sky-600" />
                    <h3 className="mt-6 text-2xl font-black tracking-[-0.04em] text-slate-950">
                      {prop.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{prop.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-sky-200 bg-white p-8 text-slate-950 shadow-2xl shadow-sky-100 md:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-sky-700">
                  <Factory className="h-4 w-4" />
                  Design partners
                </div>
                <h2 className="mt-7 text-4xl font-black leading-[0.96] tracking-[-0.06em] text-slate-950 md:text-6xl">
                  Bring the messiest export you have.
                </h2>
                <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-600">
                  If Corvus can turn it into a useful debrief in under 5 minutes, we have
                  something worth talking about.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button
                  onClick={() => openModal('demo')}
                  className="group rounded-full bg-sky-700 px-8 py-7 text-base font-black text-white shadow-lg shadow-sky-200/60 hover:bg-sky-800"
                >
                  Book a 5-minute debrief
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
                <Button
                  onClick={() => scrollToSection('workflow')}
                  variant="outline"
                  className="rounded-full border-slate-300 bg-white px-8 py-7 text-base font-black text-slate-950 hover:bg-sky-50 hover:text-sky-900"
                >
                  See how it works
                </Button>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-sky-100 px-5 py-10 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <img
                src="/images/corvus-logo.png"
                alt="Corvus Debrief logo"
                className="h-8 w-8 rounded-full object-contain ring-1 ring-cyan-200/20"
              />
              <div>
                <div className="text-lg font-black leading-none tracking-[-0.04em] text-slate-950">
                  Corvus Debrief
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-sky-600/70">
                  Corvus MFG
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 text-sm font-bold text-slate-500">
              <button onClick={() => scrollToSection('problem')} className="hover:text-sky-600">
                Problem
              </button>
              <button onClick={() => scrollToSection('workflow')} className="hover:text-sky-600">
                Workflow
              </button>
              <button onClick={() => scrollToSection('teams')} className="hover:text-sky-600">
                Teams
              </button>
            </div>
            <div className="text-sm font-bold text-slate-500">© 2026 Corvus MFG. All rights reserved.</div>
          </div>
        </footer>
      </main>

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        type={modalType}
      />
    </div>
  );
};

export default LandingPage;
