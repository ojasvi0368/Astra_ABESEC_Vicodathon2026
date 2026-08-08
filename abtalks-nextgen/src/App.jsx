import React, { useState } from 'react';
import { 
  LayoutDashboard, Flame, Trophy, Terminal, User, 
  LogOut, Bell, Search, PlusCircle, CheckCircle2, 
  ExternalLink, Sparkles, Code2, ArrowUpRight 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [streak, setStreak] = useState(14);
  const [hasCheckedIn, setHasCheckedIn] = useState(false);

  const handleCheckIn = () => {
    if (!hasCheckedIn) {
      setStreak(streak + 1);
      setHasCheckedIn(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900/50 backdrop-blur-xl hidden md:flex flex-col justify-between p-6 sticky top-0 h-screen">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Terminal className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight text-white">ABTalks</h1>
              <span className="text-xs text-indigo-400 font-medium px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">VicoDathon Redesign</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'challenges', label: '60-Day Challenge', icon: Flame },
              { id: 'hackathons', label: 'VicoDathon 2026', icon: Trophy },
              { id: 'portfolio', label: 'Proof of Work', icon: Code2 },
              { id: 'profile', label: 'My Profile', icon: User },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/20' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Quick Profile Snippet */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-indigo-400">
              JD
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-slate-200 truncate">John Developer</p>
              <p className="text-xs text-slate-400 truncate">john@abtalks.in</p>
            </div>
          </div>
          <button className="text-slate-400 hover:text-red-400 transition-colors">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Top Header */}
        <header className="h-20 border-b border-slate-800 px-6 md:px-10 flex items-center justify-between bg-slate-950/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-4 w-full max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search challenges, cohorts, projects..." 
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 transition-colors">
              <Bell className="h-4 w-4" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-800 hidden sm:block"></div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 px-3 py-1.5 rounded-xl">
              <Flame className="h-4 w-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-bold text-amber-400">{streak} Days Streak</span>
            </div>
          </div>
        </header>

        {/* Dynamic Body Content */}
        <div className="p-6 md:p-10 max-w-6xl w-full mx-auto space-y-8">
          
          {/* Welcome Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 border border-indigo-500/20 p-8 shadow-2xl">
            <div className="absolute -right-10 -bottom-10 h-64 w-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
                  <Sparkles className="h-3.5 w-3.5" /> VicoDathon 2026 Live Dashboard
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  Welcome back, John! 👋
                </h2>
                <p className="text-slate-400 text-sm mt-1 max-w-xl">
                  You are registered for India's premier AI Vibe Coding Hackathon. Build, ship your project via AI tools, and submit your public proof of work.
                </p>
              </div>
              <button 
                onClick={handleCheckIn}
                disabled={hasCheckedIn}
                className={`px-5 py-3 rounded-2xl font-semibold text-sm flex items-center gap-2 transition-all shadow-lg ${
                  hasCheckedIn 
                    ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 cursor-default' 
                    : 'bg-white text-slate-950 hover:bg-slate-200 shadow-white/10'
                }`}
              >
                {hasCheckedIn ? <CheckCircle2 className="h-4 w-4" /> : <Flame className="h-4 w-4 text-orange-600 fill-orange-600" />}
                {hasCheckedIn ? 'Checked In Today!' : 'Daily Check-In (+1 Streak)'}
              </button>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Active Challenges', value: '3 / 60', sub: 'Day 14 completed', color: 'from-blue-500/10 to-indigo-500/10 border-blue-500/20' },
              { label: 'Hackathon Status', value: 'Registered', sub: 'VicoDathon 2026', color: 'from-purple-500/10 to-pink-500/10 border-purple-500/20' },
              { label: 'Proof of Work Repos', value: '12 Projects', sub: '+2 this week', color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20' },
              { label: 'Recruiter Profile Views', value: '48 Views', sub: 'Top 5% rank', color: 'from-amber-500/10 to-orange-500/10 border-amber-500/20' },
            ].map((stat, i) => (
              <div key={i} className={`rounded-2xl border bg-gradient-to-br ${stat.color} p-5 backdrop-blur-sm`}>
                <p className="text-xs font-medium text-slate-400">{stat.label}</p>
                <h3 className="text-2xl font-bold text-white mt-1">{stat.value}</h3>
                <p className="text-xs text-slate-400 mt-2 font-medium">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Main Action Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left 2 Cols: Active Hackathon & Tasks */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-md">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-indigo-400" /> Active Hackathon: VicoDathon 2026
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Online & Active</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-slate-200">AI Vibe Coding Track</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Build using Claude, ChatGPT, Gemini, Cursor or Windsurf.</p>
                    </div>
                    <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shrink-0">
                      Submit Project <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-slate-200">Daily Task: AI Prompt Workflow</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Create a multi-agent workflow script using standard orchestration templates.</p>
                    </div>
                    <button className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-1.5 shrink-0">
                      View Task <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Recent Proof of Work Submissions */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-md">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-indigo-400" /> Recent Proof of Work
                  </h3>
                  <button className="text-xs text-indigo-400 hover:underline font-medium">View All</button>
                </div>

                <div className="space-y-3">
                  {[
                    { title: 'AI Code Refactor Bot', tech: 'Python / Gemini API', date: 'Yesterday', status: 'Verified' },
                    { title: 'SaaS Landing Page Redesign', tech: 'React / Tailwind', date: '3 days ago', status: 'Verified' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/40 border border-slate-800/60">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xs">
                          {item.title[0]}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-200">{item.title}</p>
                          <p className="text-xs text-slate-400">{item.tech} • {item.date}</p>
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Leaderboard & Community Hub */}
            <div className="space-y-6">
              
              {/* Leaderboard Card */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-md">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-amber-400" /> Community Leaderboard
                </h3>
                <div className="space-y-3">
                  {[
                    { rank: 1, name: 'Priya Sharma', streak: '58 Days', points: '2,450 XP' },
                    { rank: 2, name: 'Rahul Verma', streak: '52 Days', points: '2,120 XP' },
                    { rank: 3, name: 'John Developer (You)', streak: '14 Days', points: '1,890 XP' },
                    { rank: 4, name: 'Sneha Gupta', streak: '41 Days', points: '1,650 XP' },
                  ].map((user) => (
                    <div key={user.rank} className={`flex items-center justify-between p-3 rounded-xl border ${user.name.includes('You') ? 'bg-indigo-950/40 border-indigo-500/30' : 'bg-slate-950/30 border-slate-800/50'}`}>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-bold w-5 text-center ${user.rank === 1 ? 'text-amber-400' : user.rank === 2 ? 'text-slate-300' : user.rank === 3 ? 'text-amber-600' : 'text-slate-500'}`}>
                          #{user.rank}
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-slate-200">{user.name}</p>
                          <p className="text-[10px] text-slate-400">{user.streak} Streak</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-indigo-400">{user.points}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Resources / Hiring Partners */}
              <div className="bg-gradient-to-br from-indigo-950/40 to-slate-900/60 border border-indigo-500/20 rounded-3xl p-6">
                <h3 className="text-base font-bold text-white mb-2">🚀 Recruiter Network</h3>
                <p className="text-xs text-slate-400 mb-4">Top performers in VicoDathon 2026 unlock direct interviews with hiring partners.</p>
                <div className="flex flex-wrap gap-2">
                  {['Google Dev', 'Microsoft', 'Zomato', 'Razorpay', 'Swiggy'].map((company, idx) => (
                    <span key={idx} className="text-[11px] bg-slate-800/80 border border-slate-700 text-slate-300 px-2.5 py-1 rounded-lg font-medium">
                      {company}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>
    </div>
  );
}